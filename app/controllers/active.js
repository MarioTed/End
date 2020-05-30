const Active=require('../models/active');
class  ActiveCtl{
    async find(ctx){

        ctx.body= await Active.find();
    }
    async create(ctx){
<<<<<<< HEAD
        const {phone}=ctx.request.body;
=======
        const {name}=ctx.request.body;
>>>>>>> 2df2fc23562f392efa224233e828ca429ef223ff
        // const repeatUser=await Active.findOne({name});
        // if(repeatUser){ctx.throw(409,'用户已经存在')}
        const active=await new Active(ctx.request.body).save();
        ctx.body=active;
    }
    async update(ctx){
        const {phone} =ctx.request.body
        const active=await Active.findOneAndUpdate({phone},ctx.request.body)
        if(!active){
            ctx.throw(404,'文件不存在！')
        }
        ctx.body=active;
    }
    async del(ctx){
<<<<<<< HEAD
        const { phone } = ctx.request.body;
        const Active= await Active.findOneAndRemove({phone});
=======
        const Active= await Active.findByIdAndRemove(ctx.params.id);
>>>>>>> 2df2fc23562f392efa224233e828ca429ef223ff
        if(!Active){ctx.throw(404,'文件不存在！')}
        ctx.status=204;

    }
};

module.exports=new ActiveCtl();