const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const Par_q=new Schema({
    __v:{type:Number,select:false},
    phone:{type: Number,required:true},
    age:{type:String,required:false},
    q1:{type:Number,required: false},
    q2:{type:Number,required:false},
    q3:{type:Number,required:false},
    q4:{type:Number,required:false},
    q5:{type:Number,required:false},
    q6:{type:Number,required:false},
    q7:{type:Number,required:false},
});
module.exports=model('par_q',Par_q)