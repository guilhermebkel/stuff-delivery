export default {
	host: process.env.POSTGRES_HOST || "localhost",
	name: process.env.POSTGRES_NAME || "postgres",
	user: process.env.POSTGRES_USER || "postgres",
	password: process.env.POSTGRES_PASSWORD,
	port: process.env.POSTGRES_PORT || 5432,
	options: {
		dialectOptions: {
			ssl: process.env.POSTGRES_SSL === "active"
		},
		define: {
			createdAt: "created_at",
			updatedAt: "updated_at",
			timestamps: true,
			freezeTableName: true,
			paranoid: true,
			underscored: true
		},
		logging: process.env.DB_LOGGER === "active" && console.log
	}
}