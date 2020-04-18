import { Router } from "express"

import PayloadController from "@hermes/controllers/Payload"
import TrackController from "@hermes/controllers/Track"

import AuthService from "@shared/auth"

const route: any = Router()

/**
 * @api {post} /hermes/payload Create payload
 * @apiName payload
 * @apiGroup Hermes
 * 
 * @apiParam {String} name Payload name.
 * @apiParam {Object} payloadDimensions Payload dimensions.
 * @apiParam {Object} sender Sender info.
 * @apiParam {Object} receiver Receiver info.
 * 
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "Xiaomi A1",
 *				"payloadDimensions": {
 *					"height": 100,
 *					"length": 100,
 *					"weight": 200,
 *					"width": 100
 *				},
 *				"receiver": {
 *					"name": "Guilherme Mota",
 *					"address": "Rua Savassi",
 *					"city": "Belo Horizonte",
 *					"country": "Brasil",
 *					"state": "Minas Gerais",
 *					"zip_code": 18250300
 *				},
 *				"sender": {
 *					"name": "Marta",
 *					"address": "Rua dos Anjos",
 *					"city": "Vitória",
 *					"country": "Brasil",
 *					"state": "Espírito Santo",
 *					"zip_code": 30025005
 *				}
 *     }
 * 
 * @apiHeader {String} Authorization Auth admin token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MS"
 *     }
 * 
 * @apiPermission admin
 * 
 * @apiSuccess {Object} newPayloadData Some details of the created payload.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "tracking_code": "SS123456789BR"
 *     }
 * 
 * @apiError InvalidDataSupplied The new payload data wasn't supplied or is bad formatted.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "InvalidDataSupplied"
 *     }
 */
route.post("/payload", AuthService.isAdminMiddleware, PayloadController.registerNewPayload)

/**
 * @api {post} /hermes/track Create track subscription
 * @apiName track
 * @apiGroup Hermes
 * 
 * @apiParam {String} name Payload name.
 * @apiParam {String} trackingCode Payload tracking code.
 * 
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "Xiaomi A1",
 *			 "trackingCode": "SS123456789BR"
 *     }
 * 
 * @apiHeader {String} Authorization Auth user token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MS"
 *     }
 * 
 * @apiPermission user
 * 
 * @apiSuccess {Object} newTrackSubscriptionData Some details of the new subscription.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1
 *     }
 * 
 * @apiError InvalidDataSupplied name/trackingCode weren't supplied or are bad formatted.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "InvalidDataSupplied"
 *     }
 */
route.post("/track", AuthService.isAuthenticatedMiddleware, TrackController.makeSubscription)

/**
 * @api {get} /hermes/track Get track subscriptions
 * @apiName track
 * @apiGroup Hermes
 * 
 * @apiHeader {String} Authorization Auth user token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MS"
 *     }
 * 
 * @apiPermission user
 * 
 * @apiSuccess {Object} tracks A list of current track.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "tracks": [
 *          {
 *            "id": 2,
 *            "last_place": "Belo Horizonte, MG",
 *            "last_place_consolidated": "Courier",
 *            "last_update": "02/04/2020",
 *            "status": "New",
 *            "tracking_code": "SS123456789BR"
 *          }
 *       ]
 *     }
 * 
 * @apiError ResourceNotFound There are no subscriptions being tracked by the logged user.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Bad Request
 *     {
 *       "error": "ResourceNotFound"
 *     }
 */
route.get("/track", AuthService.isAuthenticatedMiddleware, TrackController.getCurrentTrackSubscriptions)

export default route
