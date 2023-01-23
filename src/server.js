import express  from "express"
import 'dotenv/config' 
import fileUpload from "express-fileupload"
import filesRouter from './routes/files.routes.js'
// import cors from 'cors'

const app = express()

const whiteList = [process.env.ORIGIN1,process.env.ORIGIN2]

// app.use(cors({
//   origin: (origin, callback) => {
//     if ( !origin || whiteList.includes(origin)) {
//       return callback(null, origin)
//     }
//     return callback("cors mistake")
//   },
// }));

app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:'./uploads'
}));

// app.use(express.json());
app.use("/files",filesRouter);

export default app
