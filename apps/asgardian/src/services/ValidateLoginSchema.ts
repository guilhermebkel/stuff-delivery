import { LoginSchema } from "@asgardian/interfaces/Login"

class ValidateLoginSchemaService {
	run({ email, password }: LoginSchema) {
		if (!email || !password) {
			return false
		} else {
			return true
		}
	}	
}

export default new ValidateLoginSchemaService()
