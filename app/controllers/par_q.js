const Par_q=require('../models/par_q');
class  Par_qCtl{
    async find(ctx){
        ctx.body= await Par_q.find();
    }
    async create(ctx){
        const {name}=ctx.request.body;
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
        const Par_q= await Par_q.findByIdAndRemove(ctx.params.id);
        if(!Par_q){ctx.throw(404,'文件不存在！')}
        ctx.status=204;

    }

};

module.exports=new Par_qCtl();