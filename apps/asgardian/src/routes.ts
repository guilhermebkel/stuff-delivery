import { Router } from "express"

import LoginController from "@asgardian/controllers/Login"
import SignupController from "@asgardian/controllers/Signup"

const route: Router = Router()

/**
 * @api {post} /asgardian/login Login
 * @apiName login
 * @apiGroup Asgardian
 * 
 * @apiParam {String} email User email.
 * @apiParam {String} password User password.
 * 
 * @apiSuccess {String} token Authenticated token.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "AShdjk1212KJSAkrlp@213HKD&&123.Qwqep@213HKD&&1n123",
 *     }
 * 
 * @apiError InvalidDataSupplied Email/Password weren't supplied or they are bad formatted.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "InvalidDataSupplied"
 *     }
 * 
 * @apiError InvalidCredentials Email doesn't belongs to anyone or password is incorrect.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "InvalidCredentials"
 *     }
 */
route.post("/login", LoginController.login)

/**
 * @api {post} /asgardian/signup Signup
 * @apiName signup
 * @apiGroup Asgardian
 * 
 * @apiParam {String} email email.
 * @apiParam {String} password password.
 * @apiParam {String} name name.
 * 
 * @apiSuccess {String} token Authenticated token.
 * @apiSuccess {String} email New user email.
 * @apiSuccess {String} name New user name.
 * @apiSuccess {Number} id New user id.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "AShdjk1212KJSAkrlp@213HKD&&123.Qwqep@213HKD&&1n123",
 *       "email": "mota@guilherr.me",
 *       "name": "Mota",
 *       "id": 1
 *     }
 * 
 * @apiError InvalidDataSupplied Email/Password/Name weren't supplied or they are bad formatted.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "InvalidDataSupplied"
 *     }
 */
route.post("/signup", SignupController.signup)

export default route
