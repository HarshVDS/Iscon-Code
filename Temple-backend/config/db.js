import mongoose from "mongoose";
// import dotenv from "dotenv/config";
const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/IskconData`)   
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB