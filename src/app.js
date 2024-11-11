import express, { json } from "express"
import { connectBD } from "./db.js"
import employeesRoute from "./routes/employees.routes.js"

const app = express()

// Settings
app.use(json())

// Routes
app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/v1', employeesRoute)

app.get('/ping', async (req, res) => {
    const [result] = await connectBD.query("SELECT * FROM empleados")
    res.json(result)
})

app.use((req, res, next) => {
    res.status(404).json({
        message: "endpoint Not Found"
    })
})

export default app