import User from "@asgardian/models/User"

import { SignupSchema } from "@asgardian/interfaces/Signup"

class SignupService {
	async run({ email, password, name }: SignupSchema) {
		const user = await User.create({
			email,
			password,
			name
		})

		return {
			email: user.email,
			name: user.name,
			id: user.id
		}
	}
}

export default new SignupService()
