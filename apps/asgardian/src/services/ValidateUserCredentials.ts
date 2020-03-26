import * as bcrypt from "bcrypt"

import User from "@asgardian/models/User"

class ValidateUserCredentialsService {
	async run({ email, password }: { email: string, password: string }) {
		const user = await User.findOne({
			where: { email },
			raw: true
		})

		if (!user) {
			return false
		}

		const isPasswordValid = bcrypt.compareSync(password, user.password)

		if (!isPasswordValid) {
			return false
		}

		return true
	}
}

export default new ValidateUserCredentialsService()
