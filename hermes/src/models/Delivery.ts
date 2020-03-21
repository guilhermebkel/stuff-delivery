import { Model, Sequelize, DataTypes } from "sequelize"

class Delivery extends Model {
	id: number
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
			}
		}, {
			sequelize,
			tableName: "checkout_coupons",
			indexes: [
				{ unique: true, fields: ["name"] },
				{ fields: ["customer_id"] },
			]
		})
	}
}

export default Delivery
