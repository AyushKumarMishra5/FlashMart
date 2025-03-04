const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();


const userModel = require('./models/user')

const app = express();

app.use(express.json())

app.use(cors({
    origin: ["http://localhost:3000", "https://splendid-concha-817ca9.netlify.app"],
    methods: ["POST", "GET"],
    credentials: true
}))

const PORT = process.env.PORT || 3001
const MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL)
.then(()=>console.log("Database is connected"))
.catch((err)=>console.log("Database is not connected!", err))

app.get('/', (req, res)=>{
    res.send("The server is working well!")
})

app.post('/login', (req, res)=>{
    const {username, password} = req.body;
    userModel.findOne({username: username})
    .then(user=> {
        if(user){
            if(user.password === password)
            {
                res.json("Success")
            }
            else{
                res.json("The password is incorrect!")
            }
        }
        else{
            res.json("No record existed else create a new Account")
        }
    })
})

app.post('/user', (req, res)=>{
    userModel.create(req.body)
    .then(User => res.json(User))
    .catch(err => res.json(err))
})

app.listen(PORT, (req, res)=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})