import { Router } from "express"

import PayloadController from "@hermes/controllers/Payload"

const route: Router = Router()

/**
 * @api {post} /hermes/payload Payload
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
route.post("/payload", PayloadController.registerNewPayload)

export default route
