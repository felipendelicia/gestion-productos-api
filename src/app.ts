// Import modules

import express from "express"
import morgan from "morgan"
import cors from "cors"
import config from "./config/config"

// Import Routes 

// Init app with express

const app = express()

// App settings

app.set("port", config.PORT)

// App middlewares

app.use(morgan("dev"))
app.use(cors())

// App routes


// Export App

export default app