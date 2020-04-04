import { Model, Sequelize, DataTypes } from "sequelize"

class DeliveryPayloadReceipt extends Model {
	id: number
	delivery_payload_id: number
	name: string
	path: string
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
			delivery_payload_id: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "delivery_payloads",
					key: "id"
				}
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			path: {
				type: DataTypes.STRING,
				allowNull: false
			}
		}, {
			sequelize,
			tableName: "delivery_payload_receipts",
			indexes: [
				{ fields: ["delivery_payload_id"] }
			]
		})
	}
}

export default DeliveryPayloadReceipt
