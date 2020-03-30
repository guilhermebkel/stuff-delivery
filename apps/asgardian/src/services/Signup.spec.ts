import MockUtil from "@asgardian/utils/Mock"

import SignupService from "@asgardian/services/Signup"

describe("Make Signup", () => {
	beforeAll(async () => {
		MockUtil.setupDatabase()
	})

	afterAll(async () => {
		await MockUtil.removeUser()
	})

  it("should signup user", async () => {
		await MockUtil.removeUser()

		const user = await SignupService.run({
			name: MockUtil.user.NAME,
			email: MockUtil.user.EMAIL,
			password: MockUtil.user.PASSWORD
		})

		expect(user).toBeTruthy()
	})
})
