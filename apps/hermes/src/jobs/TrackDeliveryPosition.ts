import { Job, Event, Payload } from "@shared/event"

class TrackDeliveryPositionJob implements Job {
	_event: Event = "DeliveryPositionChanged"
	_name: string = "TrackDeliveryPosition"

	get event() {
		return this._event
	}

	get name() {
		return this._name
	}

	async handle(payload: Payload) {
		return
	}
}

export default new TrackDeliveryPositionJob()
