import { SignupSchema } from "@asgardian/interfaces/Signup"

import ValidationService, { DefaultMessages } from "@shared/validation"

class ValidateSignupSchemaService {
	run({ email, password, name }: SignupSchema) {
		const Validator = new ValidationService()

		if (!email) {
			Validator.pushValidationMessage({ email: DefaultMessages.NoParam })
		}

		if (!password) {
			Validator.pushValidationMessage({ password: DefaultMessages.NoParam })
		}

		if (!name) {
			Validator.pushValidationMessage({ name: DefaultMessages.NoParam })
		}

		return Validator.resolve()
	}	
}

export default new ValidateSignupSchemaService()
