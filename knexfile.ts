/**
 * knex can't work with TypeScript yet
 */

import path from 'path'

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'db', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'db', 'migrations')
    },
    useNullAsDefault: true,
}