import mongoose, { Types } from "mongoose";

const foodSchema=new mongoose.Schema({
    name:String,
    description:String,
    price:{type:Number},
    image:{type:String},
    category:String,
})


const foodModel= mongoose.models.food ||mongoose.model("food",foodSchema)


export default foodModel;