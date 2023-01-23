import { getAwsFiles, uploadAwsFile, getOneUrlAwsFile, externalServicesDownloadFile } from "../config/s3.js";

export const createFiles= async ( req,res) => {
  try {
    const result = await uploadAwsFile(req.files.file)
    return res.status(200).json({ result })

  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error"})
  }
}

export const getFiles = async ( req,res) => {

  try {
     const result = await getAwsFiles()
     return res.status(200).json(result.Contents)

  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error"})
  }
}

export const getOneFile = async( req,res) => {
  const {filename} = req.params
  try {
    const result = await getOneUrlAwsFile(filename)
    return res.status(200).json(result.$metadata)    

  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error"})
  }
}

export const downloadFile = async( req,res) => {
  const {filename} = req.params
  console.log(filename);
  try {
    const result = await externalServicesDownloadFile(filename)
    return res.status(200).json({message:"file dwonload"})    

  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error"})
  }
}
export const updateFiles= async ( req,res) => {
  
  try {
    
    console.log(req.files)
    return res.status(200).json({ msg : "update files" })

  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error"})
  }
}
export const deleteFiles= async ( req,res) => {
  try {
    console.log(req.files)
    return res.status(200).json({ msg : "delete files" })

  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error"})
  }
}