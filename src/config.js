import { config } from "dotenv";

config()

// Configuraciones del servidor
export const PORT = process.env.PORT || 3000

// Configuraciones para base de datos
export const BD_HOST = process.env.BD_HOST || 'localhost'
export const BD_NAME = process.env.BD_NAME || 'expresdbd'
export const BD_USER = process.env.BD_USER || 'root'
export const BD_PASSWORD = process.env.BD_PASSWORD || ''
export const BD_PORT = process.env.BD_PASSWORD || 3306 
