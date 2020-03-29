import { Router } from "express"

import LoginController from "@asgardian/controllers/Login"
import SignupController from "@asgardian/controllers/Signup"

const route: any = Router()

/**
 * @api {post} /asgardian/login Login
 * @apiName login
 * @apiGroup Asgardian
 * 
 * @apiParam {String} email User email.
 * @apiParam {String} password User password.
 * 
 * @apiParamExample {json} Request-Example:
 *     {
 *       "email": "mota@guilherr.me",
 * 			 "password": "12a3"
 *     }
 * 
 * @apiSuccess {String} token Authenticated token.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MS",
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
 * @apiParamExample {json} Request-Example:
 *     {
 *       "email": "mota@guilherr.me",
 * 			 "password": "12a3",
 *       "name": "Mota"
 *     }
 * 
 * @apiSuccess {String} token Authenticated token.
 * @apiSuccess {String} email New user email.
 * @apiSuccess {String} name New user name.
 * @apiSuccess {Number} id New user id.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MS",
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
