import { NewSubscriptionSchema } from "@hermes/interfaces/Track"

class ValidateNewTrackSubscriptionSchemaService {
	run(data: NewSubscriptionSchema) {
		if (!data.name || !data.trackingCode) {
			return false
		} else {
			return true
		}
	}	
}

export default new ValidateNewTrackSubscriptionSchemaService()
