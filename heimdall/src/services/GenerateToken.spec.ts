import GenerateTokenService from "@services/GenerateToken"

describe("Generate Token", () => {
  it("should create a token", async () => {
		const PAYLOAD = {
			id: 1,
			name: "Guilherme Mota",
			email: "guilhermebromonschenkel@gmail.com",
			admin: true
		}

		const token = GenerateTokenService.run(PAYLOAD)

		expect(token).toBeTruthy()
	})
})
