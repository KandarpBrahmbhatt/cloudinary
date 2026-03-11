import express, { Router } from 'express'
import uploadImage from '../controllers/image.controller.js'
import upload from '../middleware/multer.js'

const ImageRoute = Router()

// ImageRoute.get("/add", imageUpload)
ImageRoute.post("/uplode", upload.single("image"), uploadImage)

export default ImageRoute