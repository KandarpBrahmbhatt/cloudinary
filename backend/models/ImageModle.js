import mongoose from "mongoose";

const imageSchema = () => ({
    imageURL: {
        type: String
    },
    OriginalName: {
        type: String
    },
    mimeType: {
        type: String
    },
    size: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const ImageModel = mongoose.model(imageSchema)

export default ImageModel