import uploadOnCloudinary from "../middleware/ImageUploder.middleware.js";

const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "File not found" });
        }

        const imageUrl = await uploadOnCloudinary(req.file.path);

        return res.status(200).json({
            message: "Image uploaded successfully",
            imageUrl,
        });
    } catch (error) {
        res.status(500).json({ message: "Upload failed", error });
    }
};

export default uploadImage;
