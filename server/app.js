const express=require ('express')
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.json())
const dotenv=require('dotenv')
dotenv.config()
const router =require('./routes/api')
const cors=require('cors')
const mongoose=require('mongoose')
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))//pour faire les requetes


const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.CONNECT_DB,connectionParams)
.then(()=>{
    console.log("connected!!!")
}).catch(err=>{
    console.log(err)
})

app.use(cors())
app.use(express.json())

app.use('/',router)





app.listen(3000,()=>{
    console.log("listen on the port 3000")
})










