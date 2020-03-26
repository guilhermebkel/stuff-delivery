import { Model, Sequelize, DataTypes } from "sequelize"

class User extends Model {
	id: number
	name: string
	email: string
	admin: boolean
	password: string
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
			email: {
				type: DataTypes.STRING,
				allowNull: false
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
			admin: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false
			}
		}, {
			sequelize,
			tableName: "users",
			indexes: [
				{ 
					fields: ["email"]
				}
			]
		})

		return this
	}
}

export default User
