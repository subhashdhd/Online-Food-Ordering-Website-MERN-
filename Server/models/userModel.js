import mongoose from "mongoose"


const userSchema=new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
    cartData:{type:Object,default:{}}

},{minimize:false})



const userModel=mongoose.model.user || mongoose.model("user",userSchema);

export default userModel;