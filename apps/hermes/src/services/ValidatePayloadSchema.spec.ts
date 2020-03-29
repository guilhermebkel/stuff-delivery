import ValidatePayloadSchemaService from "@hermes/services/ValidatePayloadSchema"

describe('Validate Payload Schema', () => {
  it('should failed for invalid params', async () => {
		const isValid = ValidatePayloadSchemaService.run({
			name: "",
			payloadDimensions: {} as any,
			receiver: {} as any,
			sender: {} as any
		})

		expect(isValid).toBeFalsy()
	})
	
	it('should success for correct params', async () => {
		const isValid = ValidatePayloadSchemaService.run({
			name: "Xiaomi A1",
			payloadDimensions: {
				height: 100,
				length: 100,
				weight: 200,
				width: 100
			},
			receiver: {
				name: "Guilherme Mota",
				address: "Rua Savassi",
				city: "Belo Horizonte",
				country: "Brasil",
				state: "Minas Gerais",
				zip_code: 18250300
			},
			sender: {
				name: "Marta",
				address: "Rua dos Anjos",
				city: "Vitória",
				country: "Brasil",
				state: "Espírito Santo",
				zip_code: 30025005
			}
		})

		expect(isValid).toBeTruthy()
  })
})
