import { LoginSchema } from "@asgardian/interfaces/Login"
import ValidationService, { DefaultMessages } from "@shared/validation"

class ValidateLoginSchemaService {
	run({ email, password }: LoginSchema) {
		const Validator = new ValidationService()

		if (!email) {
			Validator.pushValidationMessage({ email: DefaultMessages.NoParam })
		}

		if (!password) {
			Validator.pushValidationMessage({ password: DefaultMessages.NoParam })
		}

		return Validator.resolve()
	}
}

export default new ValidateLoginSchemaService()
