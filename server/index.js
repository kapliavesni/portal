const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require("./models/Employee")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://sveta:Sveta55@portal.loltykn.mongodb.net/");

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Sėkmingai prisijungta")
            } else {
                res.json("Slaptažodis neteisingas")
            }
        } else {
            res.json("Duomenys neteisingi")
        }
    })
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})