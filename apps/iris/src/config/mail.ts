export default {
	host: process.env.MAIL_HOST || "",
	port: process.env.MAIL_PORT ? +process.env.MAIL_PORT : 25,
	secure: process.env.MAIL_SECURE === "true" ? true : false,
	auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: "StuffDelivery Team <noreply@stuffdelivery.com>"
  }
}