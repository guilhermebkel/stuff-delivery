import DeliveryTrack from "@hermes/models/DeliveryTrack"

import { NewSubscriptionSchema } from "@hermes/interfaces/Track"

class MakeNewTrackSubscriptionService {
	async run(data: NewSubscriptionSchema, user_id: number) {
		const newTrackSubscription = await DeliveryTrack.create({
			user_id,
			tracking_code: data.trackingCode,
			name: data.name
		})

		return {
			id: newTrackSubscription.id
		}
	}
}

export default new MakeNewTrackSubscriptionService()
