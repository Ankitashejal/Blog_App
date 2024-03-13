import mongoose from "mongoose";
const connectToMongo = async () => { //connecting to backend
    const res = await mongoose.connect
    ("mongodb://localhost:27017/blog-mern-project");
    if(res){
        console.log("connected succesfully");
    }


};

export default connectToMongo;