const mongoose=require('mongoose')

const taskSchema=mongoose.Schema({
    title:{
        type:String
    },
    id:{
        type:Number
    }
    // ,
    // userId:{
    //     type:mongoose.Schema.Types.ObjectId ,ref:'User'
    // }
})

module.exports=mongoose.model('Task',taskSchema)