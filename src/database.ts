import mysql from 'mysql'
import dbConfig from './config/dbConfig'

export const db = mysql.createConnection(dbConfig)

export function connectDB(){
    db.connect(err=>{
        if (err) throw err;
        console.log('Database connected sucessfully')
    })
}