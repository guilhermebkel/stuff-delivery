import { Database } from "@shared/core"

import models from "@hermes/models"

class MockUtil {
	private _deliveryPayload = {
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
	}

	setupDatabase() {
		Database.setupConnection()
		Database.setupModels(models)
	}

	get deliveryPayload() {
		return this._deliveryPayload
	}
}

export default new MockUtil()