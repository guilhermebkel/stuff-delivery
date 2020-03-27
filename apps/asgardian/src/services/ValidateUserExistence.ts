import User from "@asgardian/models/User"

class ValidateUserExistenceService {
	async run(email: string) {
		const user = await User.findOne({
			attributes: ["id"],
			where: { email },
			raw: true
		})

		if (user) {
			return true
		} else {
			return false
		}
	}
}

export default new ValidateUserExistenceService()
