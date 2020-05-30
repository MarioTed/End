const Project=require('../models/project');
class  ProjectCtl{
    async find(ctx){
        const {phone}=ctx.request.body;
        ctx.body= await Project.findOne({phone});
        const answer = ctx.body;
        console.log(answer['phone'])
    }
    async create(ctx){
        const {phone}=ctx.request.body;
<<<<<<< HEAD
        const repeatProject=await Project.findOne({phone});
        if(repeatProject){ctx.throw(409,'文件已经存在')}
=======
        // const repeatProject=await Project.findOne({phone});
        // if(repeatProject){ctx.throw(409,'文件已经存在')}
>>>>>>> 2df2fc23562f392efa224233e828ca429ef223ff
        const project=await new Project(ctx.request.body).save();
        ctx.body=project ;
    }
    async update(ctx){
        const {phone}=ctx.request.body;
        const Project=await Project.findOneAndUpdate({phone},ctx.request.body)
        if(!Project){
            ctx.throw(404,'文件不存在！')
        }
        ctx.body=Project;
    }
    async del(ctx){
        const {phone}=ctx.request.body;
        const Project= await Project.findOneAndRemove({phone});
        if(!Project){ctx.throw(404,'文件不存在！')}
        ctx.status=204;
    }
};

module.exports=new ProjectCtl();