import MockUtil from "@hermes/utils/Mock"
import AsgardianMockUtil from "@asgardian/utils/Mock" 

import RetrieveCurrentTrackSubscriptionsService from "@hermes/services/RetrieveCurrentTrackSubscriptions"

describe('Retrieve delivery payload', () => {
	beforeAll(async () => {
		AsgardianMockUtil.setupDatabase()
		MockUtil.setupDatabase()
	})

	afterAll(async () => {
		await MockUtil.removeDeliveryTrack()
		await AsgardianMockUtil.removeUser()
	})

  it('should retrieve a existent delivery payload listing', async () => {
		const user = await AsgardianMockUtil.generateUser()
		await MockUtil.generateDeliveryTrack(user.id)

		const payload = await RetrieveCurrentTrackSubscriptionsService.run(user.id)
		
		expect(payload).toBeTruthy()
	})
})
