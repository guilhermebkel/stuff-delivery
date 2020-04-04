import { Model, Sequelize, DataTypes } from "sequelize"

import { Sender, Receiver, PayloadDimensions } from "@hermes/interfaces/DeliveryPayload"

class DeliveryPayload extends Model {
	id: number
	sender: Sender
	name: string
	receiver: Receiver
	payload_dimensions: PayloadDimensions
	tracking_code: string
	created_at: Date
	updated_at: Date
	deleted_at: Date

	static define(sequelize: Sequelize) {
		this.init({
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			tracking_code: {
				type: DataTypes.STRING
			},
			sender: {
				type: DataTypes.JSONB,
				allowNull: false
			},
			receiver: {
				type: DataTypes.JSONB,
				allowNull: false
			},
			payload_dimensions: {
				type: DataTypes.JSONB,
				allowNull: false
			}
		}, {
			sequelize,
			tableName: "delivery_payloads",
			indexes: [
				{ unique: true, fields: ["tracking_code"] }
			]
		})

		this.addHook("beforeCreate", (deliveryPayload: DeliveryPayload) => {
			const prefix = "SS"
			const suffix = "BR"
		
			const randomNumbers = Math.floor(Math.random() * 1000000000)
		
			const params = [prefix, randomNumbers, suffix]
		
			const trackingCode = params.join("")
		
			deliveryPayload.tracking_code = trackingCode
		})

		return this
	}
}

export default DeliveryPayload
