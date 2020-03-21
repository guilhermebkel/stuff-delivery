import Knex from "knex"

import knexConfig from "@core/database/knex"

class Database {
	client: Knex

	constructor() {
		this.client = Knex(knexConfig)

		return this.client
	}
}

export default new Database()