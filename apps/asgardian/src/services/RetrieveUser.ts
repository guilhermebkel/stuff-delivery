import User from "@asgardian/models/User"

class RetrieveUserService {
	async run({ email, id }: { email?: string, id?: number }) {
		if (!email && !id) {
			return null
		}

		const user = await User.findOne({
			where: {
				...(email ? { email } : {}),
				...(id ? { id } : {})
			}
		})

		if (user) {
			return user
		} else {
			return null
		}
	}
}

export default new RetrieveUserService()
