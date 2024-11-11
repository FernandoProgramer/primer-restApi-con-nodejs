import { createPool } from "mysql2/promise"
import {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT
} from './config.js'

// console.log('BD_HOST,: ', BD_HOST, 'BD_NAME,: ', BD_NAME, 'BD_USER,: ', BD_USER, 'BD_PASSWORD: ', BD_PASSWORD, '-')

export const connectBD = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT
})