// Import modules

import express from "express"
import morgan from "morgan"
import cors from "cors"

// Import Routes 

// Init app with express

const app = express()

// App settings

app.set("port", 3100)

// App middlewares

app.use(morgan("dev"))
app.use(cors())

// App routes

// Export App

export default app