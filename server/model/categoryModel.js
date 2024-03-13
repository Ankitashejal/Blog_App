import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title:{
        type:String,
    },
});
 const categoryModel = mongoose.model("Categories",categorySchema);
 export default categoryModel; // exports the categoryModel so that it can be used in other parts of your application.