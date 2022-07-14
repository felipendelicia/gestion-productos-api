// Import modules

import express, {urlencoded, json} from "express"
import morgan from "morgan"
import cors from "cors"
import config from "./config/config"

// Import Routes 

import login_router from "./routes/login.routes"

// Init app with express

const app = express()

// App settings

app.set("port", config.PORT)

// App middlewares

app.use(morgan("dev"))
app.use(cors())
app.use(urlencoded({extended:false}))
app.use(json())

// App routes

app.use('/login', login_router)


// Export App

export default app