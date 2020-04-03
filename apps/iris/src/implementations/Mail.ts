import { ServerUnaryCall, sendUnaryData } from "grpc"

import { ISendMailRequest, ISendMailResponse } from "@shared/protos"

import { SendMailSchema } from "@iris/interfaces/SendMail"

import SendMailService from "@iris/services/SendMail"
import ResponseService from "@shared/response"

class MailImplementation {
	async sendMail(call: ServerUnaryCall<ISendMailRequest>, callback: sendUnaryData<ISendMailResponse>) {
		const { to, subject, template, context } = call.request as SendMailSchema

		if (!to || !subject || !template) {
			return ResponseService.rpc<ISendMailResponse>(callback, {
				error: "NoDataSupplied"
			})
		}

		const isMailSent = await SendMailService.run({ to, subject, template, context })

		if (isMailSent) {
			return ResponseService.rpc<ISendMailResponse>(callback, {})
		} else {
			return ResponseService.rpc<ISendMailResponse>(callback, {
				error: "ServiceFailed"
			})
		}
	}
}

export default MailImplementation
