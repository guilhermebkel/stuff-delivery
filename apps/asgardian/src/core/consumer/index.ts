import { Kafka, Consumer as KafkaConsumer, logLevel } from "kafkajs"

import kafkaConfig from "@asgardian/config/kafka"

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
		console.log(`Consumer is running... [${kafkaConfig.url}]`)
		return await this.consumer.run({
			eachMessage: async ({ topic, message }) => {
				console.log(`[TOPIC:${topic}][MESSAGE:${message}]`)
			}
		})
	}
}

export default new Consumer()