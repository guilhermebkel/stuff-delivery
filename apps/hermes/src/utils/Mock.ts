import { Database } from "@shared/core"

import models from "@hermes/models"

import DeliveryPayload from "@hermes/models/DeliveryPayload"
import DeliveryTrack from "@hermes/models/DeliveryTrack"

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

	private _deliveryTrack = {
		trackingCode: "SS123456789BR",
		name: "Xiaomi A1"
	}

	async removeDeliveryTrack() {
		await DeliveryTrack.destroy({
			where: {
				tracking_code: this.deliveryTrack.trackingCode
			}
		})
	}

	async generateDeliveryPayload() {
		return await DeliveryPayload.create({
			name: this.deliveryPayload.name,
			payload_dimensions: this.deliveryPayload.payloadDimensions,
			sender: this.deliveryPayload.sender,
			receiver: this.deliveryPayload.receiver
		})
	}

	async generateDeliveryTrack(user_id: number) {
		return await DeliveryTrack.create({
			name: this.deliveryTrack.name,
			tracking_code: this.deliveryTrack.trackingCode,
			user_id
		})
	}

	setupDatabase() {
		Database.setupConnection()
		Database.setupModels(models)
	}

	get deliveryPayload() {
		return this._deliveryPayload
	}

	get deliveryTrack() {
		return this._deliveryTrack
	}
}

export default new MockUtil()