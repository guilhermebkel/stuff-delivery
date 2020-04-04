import { Kafka, Producer as KafkaProducer, logLevel, CompressionTypes } from "kafkajs"

import kafkaConfig from "./config"

import ErrorService from "@shared/error"

export type Event = 
"UserSignedUp" |
"PayloadRegistered" |
"DeliveryPositionChanged"

export interface Payload {
	user_id?: number
	delivery_payload_id?: number
	delivery_id?: number
	latitude?: string
	longitude?: string
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
	private triggerEventRetries: number = 0
	private triggerEventMaxRetries: number = 5

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

	retryTriggerEvent(event: Event, payload: Payload) {
		if (this.triggerEventRetries >= this.triggerEventMaxRetries) {
			return false
		} else {
			this.triggerEventRetries++
			return this.triggerEvent(event, payload)
		}
	}

	clearRetries() {
		this.triggerEventRetries = 0
	}

	async triggerEvent(event: Event, payload: Payload): Promise<boolean> {
		try {
			if (!this.isProducerReady) {
				this.setupProducer()

				await new Promise(resolve => setTimeout(resolve, 1000))

				return this.retryTriggerEvent(event, payload)
			}

			await this.producer.send({
				topic: event,
				messages: [{ value: JSON.stringify(payload) }],
				compression: CompressionTypes.GZIP
			})

			this.clearRetries()
			
			return true
		} catch(error) {
			ErrorService.handle(new Error(`Failed to trigger event (${event} - ${JSON.stringify(payload)}) on Kafka: ${error.message}`))
			return this.retryTriggerEvent(event, payload)
		}
	}

	setupProducer() {
		this.producer.connect()
		.then(() => {
			this.isProducerReady = true
		})
		.catch(() => {
			this.isProducerReady = false
		})
	}
}

export default new EventService()