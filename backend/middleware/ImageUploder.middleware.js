// import multer from "multer";
// import { v2 as cloudinary } from 'cloudinary';

// // je .env ma lakhiyu 6e aene configuration karavanu 6e.
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.ClOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// })

// const storage = new ClodinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: 'galleries',
//         format: async (req, file) => 'png'
//     }
// })

// const cloudinaryFileUploader = multer({ storage }) // multer ne kidhu aa storege 6e file uploade karva mate
// const uploadMultiple = cloudinaryFileUploader.array('images', 10) // array aetale lakhiyu 6e because multiple file ne uplode karvani 6e aetale


import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs' // multer mathi filepath ne delete karvamate use thay 6e.
// filepath as a parameter pass karvanu 6e.
const uploadOnCloudinary = async (filePath) => {

    // cloudinary nu configration kari 6e 

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.ClOUDINARY_API_KEY,
        api_secret: process.env.ClOUDINARY_API_SECRET,
    })

    try {
        if (!filePath) {
            return null
        }
        // Upload the image
        const uploadResult = await cloudinary.uploader.upload(filePath); //file path upload karvanu 6e.
        fs.unlinkSync(filePath) // unlinkSync no use filepath ne delete karva mate thay 6e.
        return uploadResult.secure_url // bau badhi url aavase backend mathi aemathi aa url joise
        // console.log(uploadResult);

    } catch (error) {
        fs.unlinkSync(filePath) // error aave to pan filepath ne delete kari dese.
        console.log(error)
    }

}

export default uploadOnCloudinary
