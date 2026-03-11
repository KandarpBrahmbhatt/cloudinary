import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Mongodb is Connected")
    } catch (error) {
        console.log("Mongodb Connection Error", error)
    }
}

export default connectDB