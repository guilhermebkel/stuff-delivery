import { Job, Event, Payload } from "@shared/event"

import SendMailService from "@iris/services/SendMail"

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
		const { user_email, user_name } = payload

		if (!user_email || !user_name) {
			return Promise.reject(new Error("User was not supplied!"))
		}
		
		const isMailSent = await SendMailService.run({
			subject: "Welcome to StuffDelivery!",
			template: "self-welcome",
			to: user_email,
			context: {
				userName: user_name
			}
		})

		if (!isMailSent) {
			return Promise.reject(new Error("Failed to send mail using Iris Microservice!"))
		}
	}
}

export default new SendSelfWelcomeMailJob()
