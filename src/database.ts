import mysql from 'mysql'
import config from './config/config'

const conn = mysql.createConnection({
    host:config.DB_HOST,
    user:config.DB_USER,
    password:config.DB_PASS
})

conn.connect((err)=>{
    if (err) throw err
    console.log('connected')
})