const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const Active=new Schema({
    __v:{type:Number,select:false},
    phone:{type: Number,required:true},
    q1:{type:Number,required:false},
    q2:{type:Number,required:false},
    q3:{type:Number,required:false},
    q4:{type:Number,required:false},
    q5:{type:Number,required:false},
    q6:{type:Number,required:false},
    q7:{type:Number,required:false},
});
module.exports=model('active',Active)