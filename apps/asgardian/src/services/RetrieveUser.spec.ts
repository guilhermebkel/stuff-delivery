import MockUtil from "@asgardian/utils/Mock"

import RetrieveUserService from "@asgardian/services/RetrieveUser"

describe("Retrieve user", () => {
	beforeAll(async () => {
		MockUtil.setupDatabase()
	})

	beforeEach(async () => {
		await MockUtil.generateUser()
	})

	afterAll(async () => {
		await MockUtil.removeUser()
	})

  it("should get existent user", async () => {
		const user = await RetrieveUserService.run({
			email: MockUtil.user.EMAIL
		})

		expect(user).toBeTruthy()
	})

	it("should fail on inexistent user", async () => {
		const user = await RetrieveUserService.run({
			email: "notexistent@test.com"
		})

		expect(user).toBeFalsy()
	})
})
