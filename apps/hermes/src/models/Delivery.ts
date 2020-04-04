import { Model, Sequelize, DataTypes } from "sequelize"

class Delivery extends Model {
	id: number
	delivery_man_id: number
	delivery_payload_ids: number[]
	delivered: boolean
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
			delivery_man_id: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "delivery_men",
					key: "id"
				}
			},
			delivery_payload_ids: {
				type: DataTypes.ARRAY(DataTypes.INTEGER),
				allowNull: true
			},
			delivered: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			}
		}, {
			sequelize,
			tableName: "deliveries",
			indexes: [
				{ fields: ["delivery_man_id"] },
				{ fields: ["delivery_payload_ids"] }
			]
		})
	}
}

export default Delivery
