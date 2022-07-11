import app from "./app"
import colors from './config/colors'
import connectDB from "./database"

connectDB()

const startAppCallback = () => {
    console.log(colors.info(`[server]: server running on port ${app.get('port')}`))
}

// Start APP
app.listen(app.get('port'), startAppCallback)