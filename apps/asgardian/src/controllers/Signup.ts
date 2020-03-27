import { Request, Response } from "express"

import ResponseService from "@shared/response"
import ValidateSignUpSchemaService from "@asgardian/services/ValidateSignupSchema"
import SignupService from "@asgardian/services/Signup"
import LoginService from "@asgardian/services/Login"
import ValidateUserExistenceService from "@asgardian/services/ValidateUserExistence"

class SignupController {
	async signup(req: Request, res: Response) {
		const signupData = req.body

		const isSignupDataValid = ValidateSignUpSchemaService.run(signupData)

		if (!isSignupDataValid) {
			return ResponseService.json(res, 400, { error: "InvalidDataSupplied" })
		}

		const userExists = await ValidateUserExistenceService.run(signupData.email)

		if (userExists) {
			return ResponseService.json(res, 400, { error: "UserAlreadyExists" })
		}
		
		const user = await SignupService.run(signupData)

		if (user) {
			const token = await LoginService.run({ id: user.id })

			return ResponseService.json(res, 200, { ...user, token })
		} else {
			return ResponseService.json(res, 500, { error: "ServiceFailed" })
		}
	}
}

export default new SignupController()
