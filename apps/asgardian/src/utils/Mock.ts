import { Database } from "@shared/core"

import models from "@asgardian/models"

import User from "@asgardian/models/User"

class MockUtil {
	private _user = {
		EMAIL: "test@test.com",
		PASSWORD: "123",
		NAME: "test"
	}

	setupDatabase() {
		Database.setupConnection()
		Database.setupModels(models)
	}

	async generateUser() {
		const user = await User.findOne({
			where: { email: this._user.EMAIL },
			raw: true
		})

		if (user) {
			await User.destroy({
				where: { email: this._user.EMAIL }
			})
		}

		return await User.create({
			email: this._user.EMAIL,
			password: this._user.PASSWORD,
			name: this._user.NAME
		})
	}

	async removeUser() {
		await User.destroy({
			where: { email: this._user.EMAIL },
			force: true
		})
	}

	get user() {
		return this._user
	}
}

export default new MockUtil()