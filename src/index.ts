import app from "./app"
import colors from './config/colors'

const startAppCallback = () => {
    console.log(colors.info(`[server]: server running on port ${app.get('port')}`))
}

// Start APP
app.listen(app.get('port'), startAppCallback)