import MockUtil from "@hermes/utils/Mock"
import AsgardianMockUtil from "@asgardian/utils/Mock"

import MakeNewTrackSubscriptionService from "@hermes/services/MakeNewTrackSubscription"

describe('Make new track subscription', () => {
	beforeAll(async () => {
		AsgardianMockUtil.setupDatabase()
		MockUtil.setupDatabase()
	})

	afterAll(async () => {
		await MockUtil.removeDeliveryTrack()
		await AsgardianMockUtil.removeUser()
	})

  it('should make a track subscription', async () => {
		const user = await AsgardianMockUtil.generateUser()

		const newTrackSubscription = await MakeNewTrackSubscriptionService.run({
			trackingCode: "SS123456789BR",
			name: "Xiaomi A1"
		}, user.id)

		expect(newTrackSubscription).toBeTruthy()
	})
})
