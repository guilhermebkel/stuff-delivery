import Umzug from "umzug"
import { Sequelize, Dialect } from "sequelize"

import postgresConfig from "./config"

class Database {
	rootDir: string = process.cwd()
	postgres: Sequelize

	async start(models: any[]) {
		this.setupConnection()
		await this.testConnection()
		this.setupModels(models)
		await this.syncModels()
		await this.runMigrations()
	}

	setupConnection() {
		try {
			const dialect: Dialect = "postgres"
			this.postgres = new Sequelize(
				postgresConfig.name,
				postgresConfig.user,
				postgresConfig.password,
				{
					...postgresConfig.options,
					dialect
				}
			)
		} catch (error) {
			console.error("Failed to init database!", error.message)
			process.exit(1)
		}
	}

	async testConnection() {
		try {
			await this.postgres.authenticate()
			console.log(`Database is connected... [${process.env.POSTGRES_HOST}]`)
		} catch (error) {
			console.error("Failed to connect to database!", error.message)
			process.exit(1)
		}
	}

	async runMigrations() {
		const umzug = new Umzug({
			storage: "sequelize",
			storageOptions: {
				sequelize: this.postgres
			},
			migrations: {
				params: [this.postgres.getQueryInterface(), Sequelize],
				path: `${this.rootDir}/migrations`
			}
		})

		await umzug.up()

		return Promise.resolve(true)
	}

	async syncModels() {
		await this.postgres.sync()
	}

	setupModels(models: any[]) {
		models.map(model => model.define(this.postgres))
	}
}

export default new Database()
