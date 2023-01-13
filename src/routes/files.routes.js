import { Router }                               from "express";
import { createFiles, getFiles, getOneFiles,updateFiles,deleteFiles }   from "../controllers/files.controllers.js";


const filesRouter = Router()

filesRouter.post("/", createFiles)
filesRouter.get("/",getFiles)
filesRouter.get("/:id", getOneFiles)
filesRouter.put("/:id", updateFiles)
filesRouter.delete("/:id", deleteFiles)

export default filesRouter;
