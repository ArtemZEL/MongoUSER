import mongoose from "mongoose";

const connectionToDb = async()=>{
   try {
      await mongoose.connect(process.env.MongoDBUrl);
      console.log("Connected to DB")  
   } catch (error) {
    console.log(error);
   }
}
export default connectionToDb