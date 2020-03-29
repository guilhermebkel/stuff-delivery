import { Model, Sequelize, DataTypes } from "sequelize"

class DeliveryMan extends Model {
	id: number
	name: string
	phone_number: number
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
			phone_number: {
				type: DataTypes.STRING,
				allowNull: false
			}
		}, {
			sequelize,
			tableName: "delivery_men"
		})
	}
}

export default DeliveryMan
