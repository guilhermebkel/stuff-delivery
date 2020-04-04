import MockUtil from "@hermes/utils/Mock"

import CreateDeliveryPayloadReceiptService from "@hermes/services/CreateDeliveryPayloadReceipt"

describe('Create delivery payload receipt', () => {
	beforeAll(async () => {
		MockUtil.setupDatabase()
	})

  it('should create a deliery payload receipt', async () => {
		const { id, name } = await MockUtil.generateDeliveryPayload()

		const deliveryPayloadReceipt = await CreateDeliveryPayloadReceiptService.run({
			path: "/test",
			delivery_payload_id: id,
			name
		})

		expect(deliveryPayloadReceipt).toBeTruthy()
	})
})
