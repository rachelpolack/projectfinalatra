const User = require('../model/users')
const request = require('request')

const addUser = (async (req, res) => {
    const currentUser = new User(req.body)
    try {
        console.log(currentUser)
        console.log(req.body)
        let user = await currentUser.save()
        console.log("success")
        res.status(200).json({ user })


    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
})

const getUser = (async (req, res) => {
    try {
       
        const { name, password } = req.body
        let user = await User.findOne({ name: name, password: password })
        if (!user) {
          res.status(400).json({ msg: "no account existing" })
        
        }
        else {
         res.json({
             user:user
         })
        }

    }
    catch (error) {
        console.log("rate")
        res.status(404).json({ message: error.message })
    }
})




const requestApi = () => {
    return new Promise((resolve, reject) => {
        let options = {
            method: "GET",
            url: 'https://jsonplaceholder.typicode.com/todos'

        }
        request(options, function (err, res, body) {
            if (err) {
                reject(err)
            }
            else
                resolve(body)
        })
    })
}
const getTasksList = (req, res) => {
    requestApi().then(data => {
        //const weather=new Weather(temp=data.main.temp,)
        console.log(data)
        res.send(data)
    })
        .catch(err => {
            console.log("aie")
        })
}


module.exports = { addUser, getUser, getTasksList }