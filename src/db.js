import { createPool } from "mysql2/promise"
import {
    BD_HOST,
    BD_NAME,
    BD_USER,
    BD_PASSWORD
} from './config.js'

// console.log('BD_HOST,: ', BD_HOST, 'BD_NAME,: ', BD_NAME, 'BD_USER,: ', BD_USER, 'BD_PASSWORD: ', BD_PASSWORD, '-')

export const connectBD = createPool({
    host: BD_HOST,
    user: BD_USER,
    password: BD_PASSWORD,
    database: BD_NAME
})