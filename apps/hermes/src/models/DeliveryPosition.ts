import { Model, Sequelize, DataTypes } from "sequelize"

class DeliveryPosition extends Model {
	id: number
	delivery_id: number
	latitude: number
	longitude: number
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
			delivery_id: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "deliveries",
					key: "id"
				}
			},
			latitude: {
				type: DataTypes.FLOAT,
				allowNull: true
			},
			longitude: {
				type: DataTypes.FLOAT,
				allowNull: true
			}
		}, {
			sequelize,
			tableName: "delivery_positions",
			indexes: [
				{ fields: ["delivery_id"] }
			]
		})
	}
}

export default DeliveryPosition
