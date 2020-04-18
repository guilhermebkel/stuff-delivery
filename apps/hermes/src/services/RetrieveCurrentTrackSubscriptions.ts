import sequelize from "sequelize"

import { CurrentTrackSubscription } from "@hermes/interfaces/Track"
import { PayloadStatus, ConsolidatedPlace } from "@hermes/interfaces/DeliveryPayload"

import DeliveryTrack from "@hermes/models/DeliveryTrack"
import DeliveryPayload from "@hermes/models/DeliveryPayload"
import Delivery from "@hermes/models/Delivery"
import DeliveryPosition from "@hermes/models/DeliveryPosition"

class RetrieveCurrentTrackSubscriptionsService {
	async run(user_id: number) {
		const trackSubscriptions = await DeliveryTrack.findAll({
			where: { user_id },
			order: [["created_at", "DESC"]],
			raw: true
		})

		if (!trackSubscriptions || !trackSubscriptions.length) {
			return null
		}
		
		const currentSubscriptions = await Promise.all(
			trackSubscriptions.map(async track => {
				const currentSubscription = {} as CurrentTrackSubscription

				const deliveryPayload = await DeliveryPayload.findOne({
					where: { tracking_code: track.tracking_code },
					raw: true
				})

				if (deliveryPayload) {
					const delivery = await Delivery.findOne({
						attributes: ["id"],
						where: { delivery_payload_ids: deliveryPayload.id },
						raw: true
					})

					currentSubscription.status = deliveryPayload.status
	
					if (delivery) {
						const deliveryPosition = await DeliveryPosition.findOne({
							attributes: [
								[sequelize.fn("max", sequelize.col("created_at")), "max"]
							],
							where: { delivery_id: delivery.id },
							raw: true
						})

						if (deliveryPosition) {
							currentSubscription.last_update = deliveryPosition.created_at
						}
					}
				}

				currentSubscription.id = track.id
				currentSubscription.name = track.name
				currentSubscription.tracking_code = track.tracking_code
				currentSubscription.status = currentSubscription.status || "Waiting"
				currentSubscription.last_place = "Belo Horizonte, MG"
				currentSubscription.last_place_consolidated = this.getConsolidatedPlace(currentSubscription.status)

				return currentSubscription
			})
		)

		return currentSubscriptions
	}

	getConsolidatedPlace(status: PayloadStatus): ConsolidatedPlace {
		if (status === "New") {
			return "Courier"
		} else if (status === "Waiting") {
			return "Finding"
		} else if (status === "Lost") {
			return "Lost"
		} else if (status === "Delivered") {
			return "Your house"
		} else {
			return "Finding"
		}
	}
}

export default new RetrieveCurrentTrackSubscriptionsService()
