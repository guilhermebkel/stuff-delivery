import Umzug from "umzug"
import { Sequelize, Dialect } from "sequelize"

import models from "@asgardian/models"

import postgresConfig from "@asgardian/config/postgres"

class Database {
	rootDir: string = process.cwd()
	postgres: Sequelize

	async start() {
		this.setupConnection()
		await this.testConnection()
		this.setupModels()
		// await this.syncModels()
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

	setupModels() {
		models.map(model => model.define(this.postgres))
	}
}

export default new Database()
