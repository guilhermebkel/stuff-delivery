import postgresConfig from "@config/postgres"

export default {
  client: "pg",
  connection: {
    database: postgresConfig.name,
    user: postgresConfig.user,
    password: postgresConfig.password,
    host: postgresConfig.host,
    port: +postgresConfig.port
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "src/core/database/migrations"
  }
}
