import {createConnection} from 'mysql'
import config from './config/config'

export async function connectDB(){
    try{
        const connection = await createConnection({
            host:config.HOST,
            user:config.DB_USER,
            password:config.DB_PASS,
            database:config.DATABASE
        })
    
        return connection; 
    }
    catch(err){
        console.error(err)
    }
}