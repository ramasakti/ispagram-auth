// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: 'mysql',
		connection: {
			host: '127.0.0.1',
			port: 3306,
			user: process.env.DB_USERNAME ?? 'root',
			password: process.env.DB_PASSWORD ?? 'root',
			database: process.env.DB_NAME ?? 'auth'
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},

	staging: {
		client: 'mysql',
		connection: {
			host: '127.0.0.1',
			port: 3306,
			user: process.env.DB_USERNAME ?? 'root',
			password: process.env.DB_PASSWORD ?? 'root',
			database: process.env.DB_NAME ?? 'auth'
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},

	production: {
		client: 'mysql',
		connection: {
			host: '127.0.0.1',
			port: 3306,
			user: process.env.DB_USERNAME ?? 'root',
			password: process.env.DB_PASSWORD ?? 'root',
			database: process.env.DB_NAME ?? 'auth'
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}
};
