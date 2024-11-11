import { PORT } from "./config.js"
import app from "./app.js"

// Mensaje de inicio de servidor
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))