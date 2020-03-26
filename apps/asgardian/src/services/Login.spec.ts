import "dotenv/config"

import Database from "@asgardian/core/database"

import LoginService from "@asgardian/services/Login"

import User from "@asgardian/models/User"

const MOCK = {
	EMAIL: "test@test.com",
	ENCRYPTED_PASSWORD: "$2b$05$vocuFxYi4cnrOQDQ5kWOveGmaUbv0I1tjpMsMuKxP2mz42A/0xU96",
	PASSWORD: "123",
	NAME: "test"
}

describe("Make Login", () => {
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

		await User.create({
			email: MOCK.EMAIL,
			password: MOCK.ENCRYPTED_PASSWORD,
			name: MOCK.NAME
		})
	})

	afterAll(async () => {
		await User.destroy({
			where: { email: MOCK.EMAIL },
			force: true
		})
	})

  it("should login user", async () => {
		const token = await LoginService.run({
			email: MOCK.EMAIL
		})

		expect(token).toBeTruthy()
	})
})
