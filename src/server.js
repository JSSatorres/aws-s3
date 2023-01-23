import express  from "express"
import 'dotenv/config' 
import fileUpload from "express-fileupload"
import filesRouter from './routes/files.routes.js'

const app = express()

app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:'./uploads'
}));

app.use(express.static('images'))
app.use("/files",filesRouter);

export default app
