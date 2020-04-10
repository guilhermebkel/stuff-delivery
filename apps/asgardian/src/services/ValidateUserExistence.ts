import User from "@asgardian/models/User"

import ValidationService, { DefaultMessages } from "@shared/validation"

class ValidateUserExistenceService {
	async run(email: string, mustExist: boolean) {
		const Validator = new ValidationService()

		const user = await User.findOne({
			attributes: ["id"],
			where: { email },
			raw: true
		})

		if (!user && mustExist) {
			Validator.pushValidationMessage({ email: DefaultMessages.EmailNotFound })
		}

		if (user && !mustExist) {
			Validator.pushValidationMessage({ email: DefaultMessages.EmailAlreadyTaken })
		}

		return Validator.resolve()
	}
}

export default new ValidateUserExistenceService()
