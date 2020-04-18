import { PayloadStatus, ConsolidatedPlace } from "@hermes/interfaces/DeliveryPayload"

export interface NewSubscriptionSchema {
	trackingCode: string
	name: string
}

export interface CurrentTrackSubscription {
	id: number
	name: string
	last_place?: string
	last_place_consolidated: ConsolidatedPlace
	last_update?: Date
	status: PayloadStatus,
	tracking_code: string
}
