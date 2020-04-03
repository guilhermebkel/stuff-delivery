import nodemailer, { Transporter } from "nodemailer"
import nodemailerHbs from "nodemailer-express-handlebars"
import expressHbs from "express-handlebars"
import path from "path"

import ErrorService from "@shared/error"

import { SendMailSchema } from "@iris/interfaces/SendMail"

import mailConfig from "@iris/config/mail"

class SendMailService {
	transporter: Transporter

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: mailConfig.host,
			port: mailConfig.port,
			secure: mailConfig.secure,
			...(mailConfig.auth.user ? { auth: mailConfig.auth } : {})
		})

		this.setupTemplates()
	}

	setupTemplates() {
		const viewPath = path.resolve(__dirname, "..", "view", "emails")

		this.transporter.use(
			"compile",
			nodemailerHbs({
				viewEngine: expressHbs.create({
					layoutsDir: path.resolve(viewPath, "layouts"),
					partialsDir: path.resolve(viewPath, "partials"),
					defaultLayout: "default",
					extname: ".hbs"
				}),
				viewPath,
				extName: ".hbs"
			})
		)
	}

	async run(data: SendMailSchema) {
		try {
			return await this.transporter.sendMail({
				...mailConfig.default,
				...data
			})
		} catch(error) {
			ErrorService.handle(error)
			return null
		}
	}
}

export default new SendMailService()
