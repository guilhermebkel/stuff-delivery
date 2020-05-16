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
		return await this.run(jobs)
	}

	async run(jobs: Job[]): Promise<void> {
		try {
			await Promise.all(
				jobs.map(async job => {
					this.consumers[job.event as any] = this.instance.consumer({ groupId: `${kafkaConfig.clientId}-${job.name}-consumer` })

					const MAX_CONCURRENCY = 10
					let currentConcurrency = 0

					const consumer = this.consumers[job.event as any] as KafkaConsumer

					await consumer.connect()

					await consumer.subscribe({ topic: job.event, fromBeginning: true })

					consumer.run({
						eachMessage: async ({ message }) => {
							currentConcurrency++

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

							currentConcurrency--
						}
					})

					setInterval(() => {
						if (currentConcurrency >= MAX_CONCURRENCY) {
							consumer.pause([{ topic: job.event }])
						} else {
							consumer.resume([{ topic: job.event }])
						}
					}, 0)
				})
			)
	
			console.log(`Consumer is running... [${jobs.length} jobs]`)
		} catch(error) {
			ErrorService.handle(error)
		}
	}
}

export default new Consumer()