import ValidateNewTrackSubscriptionSchemaService from "@hermes/services/ValidateNewTrackSubscriptionSchema"

describe('Validate Payload Schema', () => {
  it('should failed for invalid params', async () => {
		const result = ValidateNewTrackSubscriptionSchemaService.run({
			name: "",
			trackingCode: ""
		})

		expect(result.valid).toBeFalsy()
	})
	
	it('should success for correct params', async () => {
		const result = ValidateNewTrackSubscriptionSchemaService.run({
			name: "Xiaomi A1",
			trackingCode: "SS123456789BR"
		})

		expect(result.valid).toBeTruthy()
  })
})
