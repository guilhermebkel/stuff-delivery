import { Job, Event, Payload } from "@shared/event"

import IrisMicroservice from "@asgardian/microservices/Iris"

import RetrieveUserService from "@asgardian/services/RetrieveUser"

class SendSelfWelcomeMailJob implements Job {
	_event: Event = "UserSignedUp"
	_name: string = "SendSelfWelcomeMail"

	get event() {
		return this._event
	}

	get name() {
		return this._name
	}

	async handle(payload: Payload) {
		const { user_id } = payload

		const user = await RetrieveUserService.run({
			id: user_id
		})

		if (!user) {
			return Promise.reject(new Error("User not found!"))
		}
		
		const isMailSent = await IrisMicroservice.sendMail({
			subject: "Welcome to StuffDelivery!",
			template: "self-welcome",
			to: user.email,
			context: {
				userName: user.name
			}
		})

		if (!isMailSent) {
			return Promise.reject(new Error("Failed to send mail using Iris Microservice!"))
		}
	}
}

export default new SendSelfWelcomeMailJob()
