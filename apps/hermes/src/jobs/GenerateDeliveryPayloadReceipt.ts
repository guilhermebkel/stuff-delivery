import stream from "stream"
import path from "path"
import PDFDocument from "pdfkit"
import moment from "moment"

import { Job, Event, Payload } from "@shared/event"

import CreateDeliveryPayloadReceiptService from "@hermes/services/CreateDeliveryPayloadReceipt"
import RetrieveDeliveryPayloadService from "@hermes/services/RetrieveDeliveryPayload"
import StorageService from "@shared/storage"

import FormatUtil from "@hermes/utils/Format"

class GenerateDeliveryPayloadReceiptJob implements Job {
	_event: Event = "PayloadRegistered"
	_name: string = "GenerateDeliveryPayloadReceipt"

	get event() {
		return this._event
	}

	get name() {
		return this._name
	}

	async handle(payload: Payload) {
		const { delivery_payload_id } = payload

		if (!delivery_payload_id) {
			return Promise.reject(new Error("Delivery payload id was not supplied!"))
		}

		const deliveryPayload = await RetrieveDeliveryPayloadService.run({ id: delivery_payload_id as number })

		if (!deliveryPayload) {
			return Promise.reject(new Error("Delivery payload was not found!"))
		}

		const fileName = FormatUtil.slugify(`${deliveryPayload.id}-${deliveryPayload.name}-${+new Date(deliveryPayload.created_at)}`)

		const pdfPath = `delivery-payload/${deliveryPayload.id}/receipts/${fileName}.pdf`

		const doc = new PDFDocument({ margin: 50 })

		const stuffDeliveryLogoPath = path.resolve(__dirname, "..", "..", "..", "..", "assets", "box.png")

		/**
		 * Header
		 */
		doc
			.image(stuffDeliveryLogoPath, 50, 45, { width: 50 })
			.fillColor("#444444")
			.fontSize(20)
			.text("StuffDelivery", 110, 57)
			.fontSize(10)
			.text("StuffDelivery", 200, 50, { align: "right" })
			.text("123 Main Street", 200, 65, { align: "right" })
			.text("New York, NY, 10025", 200, 80, { align: "right" })
			.moveDown()

		/**
		 * Payload General Info
		 */
		doc	// Title
			.fillColor("#444444")
			.fontSize(20)
			.text("Payload", 50, 160)
		doc // <hr />
			.strokeColor("#aaaaaa")
			.lineWidth(1)
			.moveTo(50, 188)
			.lineTo(550, 188)
			.stroke()
		doc	// Payload General Data
			.fontSize(10)
			.font("Helvetica-Bold")
			.text("General Info", 50, 200)
			.font("Helvetica")
			.text(`Number: ${deliveryPayload.id}`, 50, 215)
			.text(`Date: ${moment(deliveryPayload.created_at).format("DD/MM/YYYY")}`, 50, 230)
			.text(`Tracking Code: ${deliveryPayload.tracking_code}`, 50, 245)
			// Payload Sender Info
			.font("Helvetica-Bold")
			.text("Sender", 220, 200)
			.font("Helvetica")
			.text(deliveryPayload.sender.name, 220, 215)
			.text(`${deliveryPayload.sender.address}, ${deliveryPayload.sender.zip_code}`, 220, 230)
			.text(`${deliveryPayload.sender.city}, ${deliveryPayload.sender.state}, ${deliveryPayload.sender.country}`, 220, 245)
			// Payload Sender Info
			.font("Helvetica-Bold")
			.text("Receiver", 385, 200)	
			.font("Helvetica")
			.text(deliveryPayload.receiver.name, 385, 215)
			.text(`${deliveryPayload.receiver.address}, ${deliveryPayload.receiver.zip_code}`, 385, 230)
			.text(`${deliveryPayload.receiver.city}, ${deliveryPayload.receiver.state}, ${deliveryPayload.receiver.country}`, 385, 245)
			.moveDown()
		doc	// <hr />
			.strokeColor("#aaaaaa")
			.lineWidth(1)
			.moveTo(50, 270)
			.lineTo(550, 270)
			.stroke()

		/**
		 * Payload General Info
		 */
		doc // Table title
			.fontSize(10)
			.font("Helvetica-Bold")
			.text("Height", 50, 330)
			.text("Length", 170, 330)
			.text("Width", 270, 330)
			.text("Weight", 370, 330)
			.text("Delivery Price", 470, 330)
		doc	// <hr />
			.strokeColor("#aaaaaa")
			.lineWidth(1)
			.moveTo(50, 345)
			.lineTo(550, 345)
			.stroke()
		doc // Table info
			.fontSize(10)
			.font("Helvetica")
			.text(`${(deliveryPayload.payload_dimensions.height).toFixed(2).replace(".", ",")}cm`, 50, 355)
			.text(`${(deliveryPayload.payload_dimensions.length).toFixed(2).replace(".", ",")}cm`, 170, 355)
			.text(`${(deliveryPayload.payload_dimensions.width).toFixed(2).replace(".", ",")}cm`, 270, 355)
			.text(`${(deliveryPayload.payload_dimensions.weight/1000).toFixed(2).replace(".", ",")}kg`, 370, 355)
			.text(`$${(Math.random()*100).toFixed(2).replace(".", ",")}`, 470, 355)

		/**
		 * Footer
		 */
		doc
			.fontSize(10)
			.text( "We will take care of this payload. Thank you for your business.", 50, 680, { align: "center", width: 500 })

		doc.end()

		const passThroughPdf = new stream.PassThrough()

		await StorageService.upload({
			Body: doc.pipe(passThroughPdf),
			ACL: "public-read",
			Bucket: "gbkel-raw",
			ContentType: "application/pdf",
			Key: pdfPath
		})

		await CreateDeliveryPayloadReceiptService.run({
			delivery_payload_id,
			name: deliveryPayload.name,
			path: pdfPath
		})
	}
}

export default new GenerateDeliveryPayloadReceiptJob()
