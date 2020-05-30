const Router=require('koa-router');
const routers=new Router({prefix:"/project"});
const {find,create,update,del}=require('../controllers/project')
routers.get('/',find);
routers.put('/', update);//
routers.post('/',create);
routers.delete('/',del);//

module.exports=routers;