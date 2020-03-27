import * as bcrypt from "bcrypt"

import { Model, Sequelize, DataTypes } from "sequelize"

class User extends Model {
	id: number
	name: string
	email: string
	admin: boolean
	encrypted_password: string
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
				type: DataTypes.VIRTUAL,
			},
			encrypted_password: {
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

		this.addHook("beforeSave", async (user: User & { password: string }) => {
      if (user.password) {
        user.encrypted_password = await bcrypt.hash(user.password, 8);
      }
    })

		return this
	}

	checkPassword(password: string) {
		const isPasswordValid = bcrypt.compareSync(password, this.encrypted_password)
		
		return isPasswordValid
  }
}

export default User
