import { NewSubscriptionSchema } from "@hermes/interfaces/Track"

import ValidationService, { DefaultMessages } from "@shared/validation"

class ValidateNewTrackSubscriptionSchemaService {
	run({ name, trackingCode }: NewSubscriptionSchema) {
		const Validator = new ValidationService()

		if (!name) {
			Validator.pushValidationMessage({ name: DefaultMessages.NoParam })
		}

		if (!trackingCode) {
			Validator.pushValidationMessage({ trackingCode: DefaultMessages.NoParam })
		}
		
		return Validator.resolve()
	}	
}

export default new ValidateNewTrackSubscriptionSchemaService()
