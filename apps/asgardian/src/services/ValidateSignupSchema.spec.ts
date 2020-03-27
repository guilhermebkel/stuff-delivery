import ValidateSignupSchemaService from "@asgardian/services/ValidateSignupSchema"

describe("Validate Login Schema", () => {
  it("should invalidate missing email", async () => {
		const isValid = ValidateSignupSchemaService.run({
			email: "",
			password: "123",
			name: "mota"
		})

		expect(isValid).toBeFalsy()
	})

	it("should invalidate missing password", async () => {
		const isValid = ValidateSignupSchemaService.run({
			email: "mota@guilherr.me",
			password: "",
			name: "mota"
		})

		expect(isValid).toBeFalsy()
	})

	it("should invalidate missing name", async () => {
		const isValid = ValidateSignupSchemaService.run({
			email: "mota@guilherr.me",
			password: "",
			name: ""
		})

		expect(isValid).toBeFalsy()
	})

	it("should invalidate missing all params", async () => {
		const isValid = ValidateSignupSchemaService.run({
			email: "",
			password: "",
			name: ""
		})

		expect(isValid).toBeFalsy()
	})

	it("should validate complete and correct data", async () => {
		const isValid = ValidateSignupSchemaService.run({
			email: "mota@guilherr.me",
			password: "123",
			name: "mota"
		})

		expect(isValid).toBeTruthy()
	})
})
