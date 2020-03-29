import MakeNewTrackSubscriptionService from "@hermes/services/MakeNewTrackSubscription"

import Database from "@hermes/core/database"

describe('Make new track subscription', () => {
	beforeAll(async () => {
		Database.setupConnection()
		Database.setupModels()
	})

  it('should make a track subscription', async () => {
		const newTrackSubscription = await MakeNewTrackSubscriptionService.run({
			trackingCode: "SS123456789BR",
				name: "Xiaomi A1"
		}, 1)

		expect(newTrackSubscription).toBeTruthy()
	})
})
