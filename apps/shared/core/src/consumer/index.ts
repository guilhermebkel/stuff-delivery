import { Kafka, Consumer as KafkaConsumer, logLevel } from "kafkajs"

import { Job } from "@shared/event"

import kafkaConfig from "./config"

class Consumer {
	private instance: Kafka
	private consumer: KafkaConsumer

	constructor() {
		this.instance = new Kafka({
			clientId: kafkaConfig.clientId,
			brokers: [kafkaConfig.url],
			logLevel: logLevel.ERROR
		})

		this.consumer = this.instance.consumer({ groupId: `${kafkaConfig.clientId}-consumer` })
	}

	async process(jobs: Job[]): Promise<void> {
		await this.connect()
		this.run(jobs)
	}

	async connect(): Promise<void> {
		return await this.consumer.connect()
	}

	async run(jobs: Job[]): Promise<void> {
		// await Promise.all(
		// 	jobs.map(async job => {
		// 		this.consumers[job.event as any] = this.instance.consumer()

		// 		await this.consumers[job.event as any].connect()

		// 		await this.consumers[job.event as any].subscribe({ topic: job.event })

		// 		await this.consumers[job.event as any].run({
		// 			eachMessage: async ({ message }) => {
		// 				try {
		// 					console.log(`[${job.event}][${job.name}] Running...`)
		// 					const payload = JSON.parse(message.value as any)

		// 					await job.handle(payload)
		// 					console.log(`[${job.event}][${job.name}] DONE!`)
		// 				} catch(error) {
		// 					ErrorService.handle(new Error(`[${job.event}][${job.name}] FAILED! ${message}`))
		// 				}
		// 			}
		// 		})
		// 	})
		// )

		// console.log(`Consumer is running... [${jobs.length} jobs]`)
	}
}

export default new Consumer()