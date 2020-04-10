export { default as DefaultMessages } from "./messages"

interface ValidationData {
	valid?: boolean
	[key: string]: any
}

class ValidationService {
	valid: boolean = true
	validation: ValidationData = {}

	pushValidationMessage(validationMessage: {}) {
		this.valid = false
		
		this.validation = {
			...this.validation,
			...validationMessage
		}
	}

	resolve() {
		return {
			messages: this.validation,
			valid: this.valid
		}
	}
}

export default ValidationService
