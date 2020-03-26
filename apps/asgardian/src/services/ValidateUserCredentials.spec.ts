import "dotenv/config"

import Database from "@asgardian/core/database"

import ValidateUserCredentials from "@asgardian/services/ValidateUserCredentials"

import User from "@asgardian/models/User"

const MOCK = {
	EMAIL: "test@test.com",
	ENCRYPTED_PASSWORD: "$2b$05$vocuFxYi4cnrOQDQ5kWOveGmaUbv0I1tjpMsMuKxP2mz42A/0xU96",
	PASSWORD: "123",
	NAME: "test"
}

describe("Validate User Credentials", () => {
	beforeAll(() => {
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
				where: { email: MOCK.EMAIL },
				force: true
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

  it("should invalidate inexistent user", async () => {
		await User.destroy({
			where: { email: MOCK.EMAIL }
		})

		const areCredentialsValid = await ValidateUserCredentials.run({
			email: "test-inexistent@test.com",
			password: MOCK.PASSWORD
		})

		expect(areCredentialsValid).toBeFalsy()
	})

	it("should invalidate incorrect password", async () => {
		const areCredentialsValid = await ValidateUserCredentials.run({
			email: MOCK.EMAIL,
			password: "wrong-password"
		})

		expect(areCredentialsValid).toBeFalsy()
	})

	it("should validate existent user", async () => {
		const areCredentialsValid = await ValidateUserCredentials.run({
			email: MOCK.EMAIL,
			password: MOCK.PASSWORD
		})

		expect(areCredentialsValid).toBeTruthy()
	})
})
