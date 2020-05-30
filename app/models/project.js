const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const Project=new Schema({
    __v:{type:Number,select:false},
    phone:{type: Number,required:true},
    time1:{type:Number,required:true},
    time2:{type:Number,required:true},
    time3:{type:Number,required:true},
    time4:{type:Number,required:true},
});
module.exports=model('project',Project)