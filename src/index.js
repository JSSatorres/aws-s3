import 'dotenv/config' 
import './config/config.js'
// import  './database/connectDb.js'
import app from './server.js'

const PORT = process.env.PORT || 5000


app.listen(PORT, () => { console.log(`conection in port ${PORT}`) })