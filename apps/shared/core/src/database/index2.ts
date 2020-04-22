import "reflect-metadata"
import { createConnection, ConnectionOptions } from "typeorm"

import { Service } from "@shared/rpc"

import databaseConfig from "./config2"

const PATH = {
	entities: "src/models2/*.ts",
	migrations: "src/database/migrations/*.ts",
	cliMigrationsDir: "src/database/migrations"
}

class Database {
	async start(appName: Service) {
		const formattedPaths = this.getFormattedPaths(appName)

		const options = {
			type: databaseConfig.type,
			host: databaseConfig.host,
			port: databaseConfig.port,
			username: databaseConfig.username,
			password: databaseConfig.password,
			database: databaseConfig.database,
			entities: formattedPaths.entities,
			migrations: formattedPaths.migrations,
			cli: formattedPaths.cli
		} as ConnectionOptions

		return await createConnection(options)
	}

	getFormattedPaths(appName: Service) {
		const basePath = __dirname.split("/apps").shift()

		const appFolder = `apps/${appName.toLowerCase()}`

		const appPath = `${basePath}/${appFolder}`

		return {
			entities: [`${appPath}/${PATH.entities}`],
			migrations: [`./${PATH.migrations}`],
			cli: { migrationsDir: `./${PATH.cliMigrationsDir}` }
		}
	}
}

export default new Database()