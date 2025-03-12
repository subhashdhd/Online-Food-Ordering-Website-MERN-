import mongoose from "mongoose"


const orderSchema=new mongoose.Schema({
    userId:String,
    items:{type:Array},
    amount:{type:Number},
    address:{type:Object},
    status:{type:String,default:"food proccesing"},
    date:{type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
})

const orderModel=mongoose.model.order || mongoose.model("order",orderSchema);


export default orderModel;