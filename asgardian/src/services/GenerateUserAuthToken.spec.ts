import GenerateUserAuthToken from "@services/GenerateUserAuthToken"

import { UserAuthTokenData } from "@interfaces/UserAuth"

describe("Generate User Auth Token", () => {
  it("should create a token", async () => {
		const userAuthTokenData: UserAuthTokenData = {
			id: 1,
			name: "Guilherme Mota",
			email: "guilhermebromonschenkel@gmail.com",
			admin: true
		}

		const token = GenerateUserAuthToken.run(userAuthTokenData)

		expect(token).toBeTruthy()
	})
})
