import mongoose from "mongoose";

const mongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL, {
           
        });
        console.log("MongoDB connection successful");
    } catch (error) {
        console.error("MongoDB connection failed");
    }
}
export default mongoDB