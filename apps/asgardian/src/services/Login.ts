import GenerateUserAuthTokenService from "@asgardian/services/GenerateUserAuthToken"

import User from "@asgardian/models/User"

class LoginService {
	async run({ email, id }: { email?: string, id?: number }) {
		if (!email && !id) {
			return null
		}

		const user = await User.findOne({
			where: {
				...(email ? { email } : {}),
				...(id ? { id } : {})
			},
			raw: true
		})

		if (!user) {
			return null
		}

		const token = GenerateUserAuthTokenService.run({
			admin: user.admin,
			email: user.email,
			id: user.id,
			name: user.name
		})

		if (!token) {
			return null
		}

		return token
	}
}

export default new LoginService()
