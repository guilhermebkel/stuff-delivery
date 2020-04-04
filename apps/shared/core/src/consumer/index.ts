import { Kafka, Consumer as KafkaConsumer, logLevel } from "kafkajs"

import { Job, Payload } from "@shared/event"
import ErrorService from "@shared/error"

import kafkaConfig from "./config"

class Consumer {
	private instance: Kafka
	private consumers: any = {}

	constructor() {
		this.instance = new Kafka({
			clientId: kafkaConfig.clientId,
			brokers: [kafkaConfig.url],
			logLevel: logLevel.ERROR
		})
	}

	async process(jobs: Job[]): Promise<void> {
		this.run(jobs)
	}

	async run(jobs: Job[]): Promise<void> {
		try {
			await Promise.all(
				jobs.map(async job => {
					this.consumers[job.event as any] = this.instance.consumer({ groupId: `${kafkaConfig.clientId}-${job.name}-consumer` })

					const consumer = this.consumers[job.event as any] as KafkaConsumer

					await consumer.connect()
	
					await consumer.subscribe({ topic: job.event })
	
					await consumer.run({
						eachMessage: async ({ message }) => {
							const executionPrefix = `[EVENT][${job.event}][JOB][${job.name}]`

							let payload: Payload = {}

							try {
								console.log(`${executionPrefix} Running...`)
								payload = JSON.parse(message.value as any) as Payload
	
								await job.handle(payload)
								console.log(`${executionPrefix} DONE!`)

							} catch(error) {
								console.log(`${executionPrefix} FAILED!`)
								ErrorService.handle(new Error(`${executionPrefix} FAILED! (${JSON.stringify(payload)}): ${error.message} `))
							}
						}
					})
				})
			)
	
			console.log(`Consumer is running... [${jobs.length} jobs]`)
		} catch(error) {
			ErrorService.handle(error)
		}
	}
}

export default new Consumer()