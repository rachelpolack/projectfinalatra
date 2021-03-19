const router=require('express').Router()
const {addUser,getUser}=require('../controller/users')
const {addTask,getTasks,deletea,addTaskPerso}=require('../controller/tasks')
router.get('/',(req,res)=>{
    res.send('this works!hello')
})
router.post('/getUser',getUser)
router.post('/addUser',addUser)
router.post('/getTasks',getTasks)
router.post('/addTask',addTask)
router.post('/addTaskPerso',addTaskPerso)
router.delete('/deletea/:id/:name',deletea)




module.exports=router