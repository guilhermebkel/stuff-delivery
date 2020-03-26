class ValidateLoginSchemaService {
	run({ email, password }: { email: string, password: string }) {
		if (!email || !password) {
			return false
		} else {
			return true
		}
	}	
}

export default new ValidateLoginSchemaService()
