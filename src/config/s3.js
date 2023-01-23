import { S3Client, PutObjectCommand, ListObjectsCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import fs from 'fs'
import {AWS_BUCKET_NAME, AWS_BUCKET_REGION, AWS_PUBLIC_KEY , AWS_SECRET_ACCESS_KEY} from './config.js'

const client = new S3Client ({
  region: AWS_BUCKET_REGION,
  credentials: {
    accessKeyId:AWS_PUBLIC_KEY,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
  }
})

export async function uploadAwsFile (file) {
  const stream = fs.createReadStream(file.tempFilePath)
  const uploadParams = {
    Bucket: AWS_BUCKET_NAME,
    Key: file.name,
    Body: stream
  }

  const command = new PutObjectCommand(uploadParams)
  return await client.send(command)  
}

export async function getAwsFiles () {
  const command = new ListObjectsCommand ({
    Bucket: AWS_BUCKET_NAME,
  })
  return await client.send(command)  
}

export async function getOneUrlAwsFile (filename) {
  const command = new GetObjectCommand ({
    Bucket: AWS_BUCKET_NAME,
    Key: filename
  })
  return await client.send(command)  
}

export async function externalServicesDownloadFile (filename) {
  const command = new GetObjectCommand ({
    Bucket: AWS_BUCKET_NAME,
    Key: filename
  })
  const result = await client.send(command)
  console.log(result);
  result.Body.pipe(fs.createWriteStream(`./images/${filename}`))  
}