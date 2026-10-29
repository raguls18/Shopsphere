import mongoose from 'mongoose';
const schema = new mongoose.Schema({ name:{type:String,required:true,trim:true,maxlength:140}, description:{type:String,default:'',maxlength:2000}, category:{type:String,required:true,trim:true,maxlength:80}, price:{type:Number,required:true,min:0}, image:{type:String,default:''}, stock:{type:Number,default:0,min:0}, featured:{type:Boolean,default:false} },{timestamps:true});
export default mongoose.model('Product',schema);
