export default {
	host: process.env.POSTGRES_HOST || "localhost",
	name: process.env.POSTGRES_NAME,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	port: process.env.POSTGRES_PORT || 5432
}