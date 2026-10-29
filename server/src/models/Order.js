import mongoose from 'mongoose';
const itemSchema = new mongoose.Schema({ product:{type:mongoose.Schema.Types.ObjectId,ref:'Product'}, name:String, price:Number, quantity:{type:Number,min:1} },{_id:false});
const schema = new mongoose.Schema({ user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}, items:[itemSchema], total:{type:Number,required:true,min:0}, status:{type:String,enum:['placed','processing','shipped','delivered','cancelled'],default:'placed'}, shippingAddress:{type:String,required:true,maxlength:500} },{timestamps:true});
export default mongoose.model('Order',schema);
