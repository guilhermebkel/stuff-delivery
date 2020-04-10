import ValidateSignupSchemaService from "@asgardian/services/ValidateSignupSchema"

describe("Validate Login Schema", () => {
  it("should invalidate missing email", async () => {
		const result = ValidateSignupSchemaService.run({
			email: "",
			password: "123",
			name: "mota"
		})

		expect(result.valid).toBeFalsy()
	})

	it("should invalidate missing password", async () => {
		const result = ValidateSignupSchemaService.run({
			email: "mota@guilherr.me",
			password: "",
			name: "mota"
		})

		expect(result.valid).toBeFalsy()
	})

	it("should invalidate missing name", async () => {
		const result = ValidateSignupSchemaService.run({
			email: "mota@guilherr.me",
			password: "",
			name: ""
		})

		expect(result.valid).toBeFalsy()
	})

	it("should invalidate missing all params", async () => {
		const result = ValidateSignupSchemaService.run({
			email: "",
			password: "",
			name: ""
		})

		expect(result.valid).toBeFalsy()
	})

	it("should validate complete and correct data", async () => {
		const result = ValidateSignupSchemaService.run({
			email: "mota@guilherr.me",
			password: "123",
			name: "mota"
		})

		expect(result.valid).toBeTruthy()
	})
})
