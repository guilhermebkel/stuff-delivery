import ValidateNewTrackSubscriptionSchemaService from "@hermes/services/ValidateNewTrackSubscriptionSchema"

describe('Validate Payload Schema', () => {
  it('should failed for invalid params', async () => {
		const isValid = ValidateNewTrackSubscriptionSchemaService.run({
			name: "",
			trackingCode: ""
		})

		expect(isValid).toBeFalsy()
	})
	
	it('should success for correct params', async () => {
		const isValid = ValidateNewTrackSubscriptionSchemaService.run({
			name: "Xiaomi A1",
			trackingCode: "SS123456789BR"
		})

		expect(isValid).toBeTruthy()
  })
})
