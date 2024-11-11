import { config } from "dotenv";

config()

// Configuraciones del servidor
export const PORT = process.env.PORT || 3000

// Configuraciones para base de datos
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || ''
export const DB_NAME = process.env.DB_NAME || 'expresdbd'
export const DB_PORT = process.env.DB_PASSWORD || 3306 
