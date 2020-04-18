import { Model, Sequelize, DataTypes } from "sequelize"

class DeliveryTrack extends Model {
	id: number
	name: string
	user_id: number
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
				allowNull: true
			},
			user_id: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "users",
					key: "id"
				}
			},
			tracking_code: {
				type: DataTypes.STRING,
				allowNull: true
			}
		}, {
			sequelize,
			tableName: "delivery_tracks",
			indexes: [
				{ fields: ["user_id"] },
				{ fields: ["tracking_code"] }
			]
		})
	}
}

export default DeliveryTrack
