import mysql from 'mysql'

const conn = mysql.createConnection({
    host:'localhost',
    user:'monty',
    password:'some_pass'
})

conn.connect((err)=>{
    if (err) throw err
    console.log('connected')
})