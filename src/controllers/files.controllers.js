import { uploadFile } from "../config/s3.js";

export const createFiles= async ( req,res) => {
  try {
    const result = await uploadFile(req.files.file)
    return res.status(200).json({ result })

  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error"})
  }
}

export const getFiles = async ( req,res) => {

  try {
     return res.status(200).json({ msg: "getFiles "})

  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error"})
  }
}

export const getOneFiles = async( req,res) => {
 
  try {
  
    return res.status(200).json({ msg: "get one Files "})    

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