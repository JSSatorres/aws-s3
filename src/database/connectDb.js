import mongoose from 'mongoose';
import 'dotenv/config'

const mongoOpts =  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.set('strictQuery', false)
const mongoUri  = process.env.URI_MONGO
  try {
    mongoose.connect(mongoUri, mongoOpts)
    console.log( 'conection DB ok');
  } catch (error) {
    console.log(error);
    throw new Error ('DB error:' +  error)
  }
