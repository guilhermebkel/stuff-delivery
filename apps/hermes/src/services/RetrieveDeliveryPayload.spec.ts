import MockUtil from "@hermes/utils/Mock"

import RetrieveDeliveryPayloadService from "@hermes/services/RetrieveDeliveryPayload"

describe('Retrieve delivery payload', () => {
	beforeAll(async () => {
		MockUtil.setupDatabase()
	})

  it('should retrieve a existent delivery payload', async () => {
		const { id } = await MockUtil.generateDeliveryPayload()

		const payload = await RetrieveDeliveryPayloadService.run({ id })

		expect(payload).toBeTruthy()
	})

	it('should not retrieve a inexistent delivery payload', async () => {
		const payload = await RetrieveDeliveryPayloadService.run({ id: 900 })

		expect(payload).toBeFalsy()
	})
})
