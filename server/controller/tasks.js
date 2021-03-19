const User = require('../model/users')
const Task = require('../model/tasks')


const addTask = (req, res) => {
    const { user, task } = req.body

    const currentTask = new Task({ title: task.title, id: task.id })
    currentTask.save()
        .then(task => {
            User.findOne({ name: user.nameUser, password: user.passwordUser }).then(user=>{
                user.tasks.push(currentTask._id);
                user.save().then(()=>{

                }).catch(err=>{
                    console.log(err)
                })
            }).catch(err => {
                console.log(err)
            })
         }).catch(err => {
                    console.log(err)
                })
            
      
}

const addTaskPerso=(req,res)=>{
    const { user, task } = req.body
    const x=task
    console.log(x)

    const currentTask = new Task({ title: x, id: task.id })
    currentTask.save()
        .then(task => {
            User.findOne({ name: user.nameUser, password: user.passwordUser }).then(user=>{
                user.tasks.push(currentTask._id);
                user.save().then(()=>{

                }).catch(err=>{
                    console.log(err)
                })
            }).catch(err => {
                console.log(err)
            })
         }).catch(err => {
                    console.log(err)
                })

}

const getTasks = (req, res) => {

    const { user } = req.body
   
    User.findOne({ name: user.nameUser, password: user.passwordUser })
        .populate({ path: 'tasks', select: "title id" })
        .then(user => {
            res.json({ tasks: user.tasks })
        
        })
        .catch(err => {
            console.log(err)
        })
}
const deletea=(req,res)=>{
  
    Task.findByIdAndDelete(req.params.id)
    .then(task=>{
        User.findOne({name:req.params.name}).then(user=>{
            user.tasks.pop({ _id:req.params.id})
            user.save().then(()=>{
              res.send({user})
            }).catch(err=>{
                console.log("flute")
            })
        })
        .catch(err=>{
            console.log("ahh")
        })
    
        })
         .catch(err=>{
            
            console.log(err)
    })
}



module.exports = { addTask, getTasks,deletea,addTaskPerso }