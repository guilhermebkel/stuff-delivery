import MockUtil from "@asgardian/utils/Mock"

import ValidateUserCredentials from "@asgardian/services/ValidateUserCredentials"

describe("Validate User Credentials", () => {
	beforeAll(() => {
		MockUtil.setupDatabase()
	})

	beforeEach(async () => {
		await MockUtil.generateUser()
	})

	afterAll(async () => {
		await MockUtil.removeUser()
	})

  it("should invalidate inexistent user", async () => {
		await MockUtil.removeUser()

		const areCredentialsValid = await ValidateUserCredentials.run({
			email: "test-inexistent@test.com",
			password: MockUtil.user.PASSWORD
		})

		expect(areCredentialsValid).toBeFalsy()
	})

	it("should invalidate incorrect password", async () => {
		const areCredentialsValid = await ValidateUserCredentials.run({
			email: MockUtil.user.EMAIL,
			password: "wrong-password"
		})

		expect(areCredentialsValid).toBeFalsy()
	})

	it("should validate existent user", async () => {
		const areCredentialsValid = await ValidateUserCredentials.run({
			email: MockUtil.user.EMAIL,
			password: MockUtil.user.PASSWORD
		})

		expect(areCredentialsValid).toBeTruthy()
	})
})
