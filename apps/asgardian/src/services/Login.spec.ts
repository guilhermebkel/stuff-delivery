import MockUtil from "@asgardian/utils/Mock"

import LoginService from "@asgardian/services/Login"

describe("Make Login", () => {
	beforeAll(async () => {
		MockUtil.setupDatabase()
	})

	beforeEach(async () => {
		await MockUtil.generateUser()
	})

	afterAll(async () => {
		await MockUtil.removeUser()
	})

  it("should login user", async () => {
		const token = await LoginService.run({
			email: MockUtil.user.EMAIL
		})

		expect(token).toBeTruthy()
	})
})
