import { PayloadSchema } from "@hermes/interfaces/DeliveryPayload"

class ValidatePayloadSchemaService {
	run(data: PayloadSchema) {
		if (!data.name || !data.payloadDimensions || !data.receiver || !data.sender) {
			return false
		} else {
			return true
		}
	}	
}

export default new ValidatePayloadSchemaService()
