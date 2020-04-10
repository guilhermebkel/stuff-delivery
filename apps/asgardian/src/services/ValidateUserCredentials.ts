import User from "@asgardian/models/User"

import { LoginSchema } from "@asgardian/interfaces/Login"

import ValidationService, { DefaultMessages } from "@shared/validation"

class ValidateUserCredentialsService {
	async run({ email, password }: LoginSchema) {
		const Validator = new ValidationService()

		const user = await User.findOne({
			where: { email }
		})

		if (user) {
			const isPasswordValid = user.checkPassword(password)

			if (!isPasswordValid) {
				Validator.pushValidationMessage({ email: DefaultMessages.InvalidCredentials })
			}
		} else {
			Validator.pushValidationMessage({ email: DefaultMessages.InvalidCredentials })
		}

		return Validator.resolve()
	}
}

export default new ValidateUserCredentialsService()
