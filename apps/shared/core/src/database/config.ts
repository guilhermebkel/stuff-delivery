export default {
	name: process.env.POSTGRES_NAME || "postgres",
	user: process.env.POSTGRES_USER || "postgres",
	password: process.env.POSTGRES_PASSWORD,
	options: {
		dialectOptions: {
			ssl: process.env.POSTGRES_SSL === "active"
		},
		define: {
			createdAt: "created_at",
			updatedAt: "updated_at",
			timestamps: true,
			freezeTableName: true,
			underscored: true,
			paranoid: true
		},
		logging: process.env.DB_LOGGER === "active" && console.log,
		port: process.env.POSTGRES_PORT ? +process.env.POSTGRES_PORT : 5432,
		host: process.env.POSTGRES_HOST || "localhost"
	}
}