import ValidateLoginSchema from "@asgardian/services/ValidateLoginSchema"

describe("Validate Login Schema", () => {
  it("should invalidate missing email", async () => {
		const isValid = ValidateLoginSchema.run({
			email: "",
			password: "123"
		})

		expect(isValid).toBeFalsy()
	})

	it("should invalidate missing password", async () => {
		const isValid = ValidateLoginSchema.run({
			email: "mota@guilherr.me",
			password: ""
		})

		expect(isValid).toBeFalsy()
	})

	it("should invalidate missing all params", async () => {
		const isValid = ValidateLoginSchema.run({
			email: "",
			password: ""
		})

		expect(isValid).toBeFalsy()
	})

	it("should validate complete and correct data", async () => {
		const isValid = ValidateLoginSchema.run({
			email: "mota@guilherr.me",
			password: "123"
		})

		expect(isValid).toBeTruthy()
	})
})
