import app from "./app"

const startAppCallback = () => {
    console.log(`server on port ${app.get('port')}`)
}

// Start APP
app.listen(app.get('port'), startAppCallback)