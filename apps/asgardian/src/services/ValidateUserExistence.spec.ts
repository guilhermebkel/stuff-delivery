import MockUtil from "@asgardian/utils/Mock"

import ValidateUserExistenceService from "@asgardian/services/ValidateUserExistence"

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

  it("should recognize existent user", async () => {
		const result = await ValidateUserExistenceService.run(MockUtil.user.EMAIL, true)

		expect(result.valid).toBeTruthy()
	})

	it("should recognize not existent user", async () => {
		const result = await ValidateUserExistenceService.run("hello@hello.com", true)

		expect(result.valid).toBeFalsy()
	})
})
