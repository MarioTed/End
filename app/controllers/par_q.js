const Par_q=require('../models/par_q');
class  Par_qCtl{
    async find(ctx){
        ctx.body= await Par_q.find();
    }
    async create(ctx){
        const {phone}=ctx.request.body;
        const repeatParq = await Par_q.findOne({ phone });
        if (repeatParq) { ctx.throw(409, '文件已经存在') }
        const par_q=await new Par_q(ctx.request.body).save();
        ctx.body=par_q;
    }
    async update(ctx){
        const {phone}=ctx.request.body;
        const par_q=await Par_q.findOneAndUpdate({phone},ctx.request.body)
        if(!par_q){
            ctx.throw(404,'文件不存在！')
        }
        ctx.body=par_q;
    }
    async del(ctx){
        const { phone } = ctx.request.body;
        const Par_q= await Par_q.findOneAndRemove({phone});
        if(!Par_q){ctx.throw(404,'文件不存在！')}
        ctx.status=204;

    }

};

module.exports=new Par_qCtl();