export default {
	type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: process.env.POSTGRES_PORT ? +process.env.POSTGRES_PORT : 5432,
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_NAME || "postgres"
}