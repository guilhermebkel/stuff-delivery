import MockUtil from "@hermes/utils/Mock"

import DeliveryPayload from "@hermes/models/DeliveryPayload"

import RetrieveDeliveryPayloadService from "@hermes/services/RetrieveDeliveryPayload"

describe('Retrieve delivery payload', () => {
	beforeAll(async () => {
		MockUtil.setupDatabase()
	})

  it('should retrieve a existent delivery payload', async () => {
		const { id } = await DeliveryPayload.create(MockUtil.deliveryPayload)

		const payload = await RetrieveDeliveryPayloadService.run({ id })

		expect(payload).toBeTruthy()
	})

	it('should not retrieve a inexistent delivery payload', async () => {
		const payload = await RetrieveDeliveryPayloadService.run({ id: 900 })

		expect(payload).toBeFalsy()
	})
})
