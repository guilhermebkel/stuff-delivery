import PublisherService from "@shared/event"
import CacheService, { CacheKey } from "@shared/cache"

import Delivery from "@hermes/models/Delivery"
import DeliveryPosition from "@hermes/models/DeliveryPosition"

class Tracker {
	deliveriesCacheKey: CacheKey = "deliveries"

	async init() {
		let trackers: any[] = []
		let deliveries: Delivery[] = []

		deliveries = await this.retrieveCurrentDeliveries()

		trackers = deliveries.map(delivery => {
			setInterval(async () => {
				const lastDeliveryPosition = await DeliveryPosition.findOne({
					where: {
						delivery_id: delivery.id
					},
					order: [["id", "DESC"]],
					raw: true
				})

				PublisherService.triggerEvent("DeliveryPositionChanged", {
					delivery_id: delivery.id,
					latitude: '10',
					longitude: '11'
				})
			}, 5000)
		})

		const deliveriesCacheValidator = setInterval(async () => {
			const isCacheValid = await this.checkDeliveriesCache()

			if (!isCacheValid) {
				clearInterval(deliveriesCacheValidator)
				trackers.forEach(tracker => clearInterval(tracker))
				console.log(`Tracker cache was invalidated, attempt to restart...`)
				return this.init()
			}
		}, 2000)

		console.log(`Tracker initialized... [${deliveries.length} deliveries]`)
	}

	async retrieveCurrentDeliveries() {
		let deliveries: Delivery[] = await CacheService.get(this.deliveriesCacheKey)

		if (!deliveries) {
			deliveries = await Delivery.findAll({
				where: {
					delivered: false
				},
				raw: true
			})

			CacheService.set(this.deliveriesCacheKey, deliveries)
		}

		return deliveries
	}

	async checkDeliveriesCache() {
		const deliveries = await CacheService.get(this.deliveriesCacheKey)

		if (deliveries) {
			return true
		} else {
			return false
		}
	}
}

export default new Tracker()
