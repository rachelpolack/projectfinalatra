const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String,
        minLength: 6

    },
    mobile: {
        type: String
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Task'
    }]
})

module.exports = mongoose.model('User', userSchema)