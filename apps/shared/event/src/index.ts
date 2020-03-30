import { Kafka, Producer as KafkaProducer, logLevel, CompressionTypes } from "kafkajs"

import kafkaConfig from "./config"

import ErrorService from "@shared/error"

export type Event = 
"UserSignedUp" |
"PayloadRegistered"

export interface Payload {
	user_id?: number
	payload_id?: number
	[key: string]: any
}

export interface Job {
	event: Event
	name: string
	handle: (payload: Payload) => Promise<void>
}

class EventService {
	private instance: Kafka
	private producer: KafkaProducer
	private isProducerReady: boolean = false

	constructor() {
		this.instance = new Kafka({
			clientId: kafkaConfig.clientId,
			brokers: [kafkaConfig.url],
			retry: {
				initialRetryTime: 300,
				retries: 20,
			},
			logLevel: logLevel.ERROR,
		})

		this.producer = this.instance.producer()
	}

	async triggerEvent(event: Event, payload: Payload): Promise<boolean> {
		try {
			if (!this.isProducerReady) {
				this.setupProducer()

				await new Promise(resolve => setTimeout(resolve, 1000))

				return this.triggerEvent(event, payload)
			}

			await this.producer.send({
				topic: event,
				messages: [{ value: JSON.stringify(payload) }],
				compression: CompressionTypes.GZIP
			})
			
			return true
		} catch(error) {
			ErrorService.handle(new Error(`Failed to trigger event (${event} - ${JSON.stringify(payload)}) on Kafka: ${error.message}`))
			return false
		}
	}

	setupProducer() {
		this.producer.connect().then(() => {
			this.isProducerReady = true
		})
	}
}

export default new EventService()