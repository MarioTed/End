const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const Ability=new Schema({
    __v:{type:Number,select:false},
    phone:{type: Number,required:true},
    muscle:{type:Number,required: false},
    heart:{type:Number,required:false},
    Bend_sitting:{type:Number,required:false},
    Bend_standing:{type:Number,required:false},
});
module.exports=model('Ability',Ability)