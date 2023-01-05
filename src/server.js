import express  from "express"
import 'dotenv/config' 
import cors from 'cors'
import fileUpload from "express-fileupload"
import foodStarsRouter from './routes/files.routes.js'
import filesRouter from './routes/files.routes.js'

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

// app.post('/files', function(req, res) {
//   console.log(req);
//   console.log(req.files.foo); // the uploaded file object
// });
app.use(fileUpload());
// app.use(express.json());
// app.use("/foodstars",foodStarsRouter);
app.use("/files",filesRouter);

export default app
