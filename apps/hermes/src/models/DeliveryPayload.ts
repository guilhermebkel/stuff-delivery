import { Model, Sequelize, DataTypes } from "sequelize"

import { Sender, Receiver, PayloadDimensions } from "@hermes/interfaces/DeliveryPayload"

class DeliveryPayload extends Model {
	id: number
	created_at: Date
	updated_at: Date
	deleted_at: Date
	sender: Sender
	receiver: Receiver
	payload_dimensions: PayloadDimensions

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
				type: DataTypes.STRING,
				allowNull: false
			},
			weight: {
				type: DataTypes.INTEGER,
				allowNull: false
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
	}
}

export default DeliveryPayload
