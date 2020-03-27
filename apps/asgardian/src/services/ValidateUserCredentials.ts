import User from "@asgardian/models/User"

import { LoginSchema } from "@asgardian/interfaces/Login"

class ValidateUserCredentialsService {
	async run({ email, password }: LoginSchema) {
		const user = await User.findOne({
			where: { email }
		})

		if (!user) {
			return false
		}

		const isPasswordValid = user.checkPassword(password)

		if (!isPasswordValid) {
			return false
		}

		return true
	}
}

export default new ValidateUserCredentialsService()
