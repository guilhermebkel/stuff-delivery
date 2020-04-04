import MockUtil from "@hermes/utils/Mock"

import DeliveryPayload from "@hermes/models/DeliveryPayload"

import CreateDeliveryPayloadReceiptService from "@hermes/services/CreateDeliveryPayloadReceipt"

describe('Create delivery payload receipt', () => {
	beforeAll(async () => {
		MockUtil.setupDatabase()
	})

  it('should retrieve a existent delivery payload', async () => {
		const { id, name } = await DeliveryPayload.create(MockUtil.deliveryPayload)

		const deliveryPayloadReceipt = await CreateDeliveryPayloadReceiptService.run({
			path: "/test",
			delivery_payload_id: id,
			name
		})

		expect(deliveryPayloadReceipt).toBeTruthy()
	})
})
