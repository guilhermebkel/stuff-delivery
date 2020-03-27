import { SignupSchema } from "@asgardian/interfaces/Signup"

class ValidateSignupSchemaService {
	run({ email, password, name }: SignupSchema) {
		if (!email || !password || !name) {
			return false
		} else {
			return true
		}
	}	
}

export default new ValidateSignupSchemaService()
