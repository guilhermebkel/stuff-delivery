import { Model, Sequelize, DataTypes } from "sequelize"

import { Sender, Receiver } from "@interfaces/Delivery"

class Delivery extends Model {
	id: number
	created_at: Date
	updated_at: Date
	deleted_at: Date
	sender: Sender
	receiver: Receiver

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
				type: DataTypes.NUMBER,
				allowNull: false
			},
			sender: {
				type: DataTypes.JSONB,
				allowNull: false
			},
			receiver: {
				type: DataTypes.JSONB,
				allowNull: false
			}
		}, {
			sequelize,
			tableName: "delivery",
			indexes: [
				{ unique: true, fields: ["tracking_code"] },
			]
		})
	}
}

export default Delivery
