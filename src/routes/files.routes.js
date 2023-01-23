import { Router }                               from "express";
import { createFiles, getFiles, getOneFile,updateFiles,deleteFiles,downloadFile }   from "../controllers/files.controllers.js";

const filesRouter = Router()

filesRouter.post("/", createFiles)
filesRouter.get("/",getFiles)
filesRouter.get("/:filename", getOneFile)
filesRouter.get("/download/:filename", downloadFile)
filesRouter.put("/:filename", updateFiles)
filesRouter.delete("/:filename", deleteFiles)

export default filesRouter;
