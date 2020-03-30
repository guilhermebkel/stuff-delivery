import MockUtil from "@hermes/utils/Mock"

import MakeNewTrackSubscriptionService from "@hermes/services/MakeNewTrackSubscription"

describe('Make new track subscription', () => {
	beforeAll(async () => {
		MockUtil.setupDatabase()
	})

  it('should make a track subscription', async () => {
		const newTrackSubscription = await MakeNewTrackSubscriptionService.run({
			trackingCode: "SS123456789BR",
			name: "Xiaomi A1"
		}, 1)

		expect(newTrackSubscription).toBeTruthy()
	})
})
