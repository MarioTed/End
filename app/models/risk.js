const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const Risk=new Schema({
    __v:{type:Number,select:false},
    phone:{type: Number,required:true},
    Regular_orNot:{type:Number,required: false},
    Three_one:{type:Number,required:false},
});
module.exports=model('Risk',Risk)