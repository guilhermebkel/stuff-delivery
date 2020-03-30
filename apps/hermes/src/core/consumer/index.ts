import { Kafka, Consumer as KafkaConsumer, logLevel } from "kafkajs"

import kafkaConfig from "@hermes/config/kafka"

class Consumer {
	private instance: Kafka
	private consumer: KafkaConsumer
	private clientId: string = "hermes"
	private groupId: string = "hermes-consumer"

	constructor() {
		this.instance = new Kafka({
			clientId: this.clientId,
			brokers: [kafkaConfig.url],
			logLevel: logLevel.ERROR
		})

		this.consumer = this.instance.consumer({ groupId: this.groupId })
	}

	async process(): Promise<void> {
		await this.connect()
		this.run()
	}

	async connect(): Promise<void> {
		return await this.consumer.connect()
	}

	async run(): Promise<void> {
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