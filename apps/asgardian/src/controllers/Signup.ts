import { Request, Response } from "express"

import ResponseService from "@shared/response"
import ValidateSignUpSchemaService from "@asgardian/services/ValidateSignupSchema"
import SignupService from "@asgardian/services/Signup"
import LoginService from "@asgardian/services/Login"
import ValidateUserExistenceService from "@asgardian/services/ValidateUserExistence"
import EventService from "@shared/event"

class SignupController {
	async signup(req: Request, res: Response) {
		const signupData = req.body

		const signupDataValidation = ValidateSignUpSchemaService.run(signupData)

		if (!signupDataValidation.valid) {
			return ResponseService.json(res, 400, {
				error: "InvalidDataSupplied",
				messages: signupDataValidation.messages
			})
		}

		const userExistenceValidation = await ValidateUserExistenceService.run(signupData.email, false)

		if (!userExistenceValidation.valid) {
			return ResponseService.json(res, 400, {
				error: "UserAlreadyExists",
				messages: userExistenceValidation.messages
			})
		}
		
		const user = await SignupService.run(signupData)

		if (user) {
			const token = await LoginService.run({ id: user.id })

			EventService.triggerEvent("UserSignedUp", {
				user_id: user.id,
				user_email: user.email,
				user_name: user.name
			})

			return ResponseService.json(res, 200, { ...user, token })
		} else {
			return ResponseService.json(res, 500, { error: "ServiceFailed" })
		}
	}
}

export default new SignupController()
