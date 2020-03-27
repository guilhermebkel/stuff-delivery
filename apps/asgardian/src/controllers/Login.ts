import { Request, Response } from "express"

import ResponseService from "@shared/response"
import ValidateLoginSchemaService from "@asgardian/services/ValidateLoginSchema"
import ValidateUserCredentialsService from "@asgardian/services/ValidateUserCredentials"
import LoginService from "@asgardian/services/Login"

class LoginController {
	async login(req: Request, res: Response) {
		const loginData = req.body

		const isLoginDataValid = ValidateLoginSchemaService.run(loginData)

		if (!isLoginDataValid) {
			return ResponseService.json(res, 400, { error: "InvalidDataSupplied" })
		}

		const areUserCredentialsValid = await ValidateUserCredentialsService.run(loginData)

		if (!areUserCredentialsValid) {
			return ResponseService.json(res, 400, { error: "InvalidCredentials" })
		}

		const token = await LoginService.run({ email: loginData.email })

		if (token) {
			return ResponseService.json(res, 200, { token })
		} else {
			return ResponseService.json(res, 500, { error: "ServiceFailed" })
		}
	}
}

export default new LoginController()
