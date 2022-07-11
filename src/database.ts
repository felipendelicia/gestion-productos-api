import mysql from 'mysql'
import config from './config/config'
import colors from './config/colors'

const connectDB = () => {
    const conn = mysql.createConnection({
        host:config.DB_HOST,
        user:config.DB_USER,
        password:config.DB_PASS
    })
    
    conn.connect((err)=>{
        if (err) throw err
        console.log(colors.info('[database]: connected the DB successfully!'))
    })
    
}

export default connectDB
