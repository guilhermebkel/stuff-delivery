import { EntityRepository, Repository, getCustomRepository } from "typeorm"
import * as bcrypt from "bcrypt"

import User from "@asgardian/models2/User"

@EntityRepository(User)
class UserRepository extends Repository<User> {
  async checkPassword(user_id: string, password: string) {
		const user = await this.findOne({
			where: { id: user_id }
		})

		if (user) {
			return bcrypt.compareSync(password, user.encrypted_password)
		} else {
			return false
		}
  }
}

export default getCustomRepository(UserRepository)