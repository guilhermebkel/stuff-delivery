import RegisterNewPayloadService from "@hermes/services/RegisterNewPayload"

import Database from "@hermes/core/database"

describe('Register new payload', () => {
	beforeAll(async () => {
		Database.setupConnection()
		Database.setupModels()
	})

  it('should create a new payload', async () => {
		const newPayload = await RegisterNewPayloadService.run({
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

		expect(newPayload).toBeTruthy()
	})
})
