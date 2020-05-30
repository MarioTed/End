const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const Users=new Schema({
    __v:{type:Number,select:false},
    name:{type:String,required:false},
    password:{type:String,required:false,select:true},
    age:{type:String,required:false},
    phone:{type:Number,required:false},
    height:{type:Number,required:false},
    weight:{type:Number,required:false},
    BMI:{type:Number,required:false}
    //avatar_url:{type:String},
    //gender:{type:String,enum:['male','female'],default:'male',required:false},//enum是可供选择的东西
    //headline:{type:String},
    //locations:{type:[{type:String}]},//数组的处理
    //employment:{type:[{
      //  company:{type:String},
        //    job:{type:String}
        //}]}//数组的嵌套
});
module.exports=model('Users',Users)