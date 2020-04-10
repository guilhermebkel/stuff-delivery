import ValidateLoginSchema from "@asgardian/services/ValidateLoginSchema"

describe("Validate Login Schema", () => {
  it("should invalidate missing email", async () => {
		const result = ValidateLoginSchema.run({
			email: "",
			password: "123"
		})

		expect(result.valid).toBeFalsy()
	})

	it("should invalidate missing password", async () => {
		const result = ValidateLoginSchema.run({
			email: "mota@guilherr.me",
			password: ""
		})

		expect(result.valid).toBeFalsy()
	})

	it("should invalidate missing all params", async () => {
		const result = ValidateLoginSchema.run({
			email: "",
			password: ""
		})

		expect(result.valid).toBeFalsy()
	})

	it("should validate complete and correct data", async () => {
		const result = ValidateLoginSchema.run({
			email: "mota@guilherr.me",
			password: "123"
		})

		expect(result.valid).toBeTruthy()
	})
})
