import app from "./app"
import { connectDB } from "./database"

const startAppCallback = () => {
    console.log(`server on port ${app.get('port')}`)
}

// Connect with the DB

connectDB()

// Start APP
app.listen(app.get('port'), startAppCallback)