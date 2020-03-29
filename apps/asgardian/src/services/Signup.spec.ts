import Database from "@asgardian/core/database"

import SignupService from "@asgardian/services/Signup"

import User from "@asgardian/models/User"

const MOCK = {
	EMAIL: "test@test.com",
	PASSWORD: "123",
	NAME: "test"
}

describe("Make Signup", () => {
	beforeAll(async () => {
		Database.setupConnection()
		Database.setupModels()
	})

	beforeEach(async () => {
		const user = await User.findOne({
			where: { email: MOCK.EMAIL },
			raw: true
		})

		if (user) {
			await User.destroy({
				where: { email: MOCK.EMAIL }
			})
		}
	})

	afterAll(async () => {
		await User.destroy({
			where: { email: MOCK.EMAIL },
			force: true
		})
	})

  it("should signup user", async () => {
		const user = await SignupService.run({
			name: MOCK.NAME,
			email: MOCK.EMAIL,
			password: MOCK.PASSWORD
		})

		expect(user).toBeTruthy()
	})
})
