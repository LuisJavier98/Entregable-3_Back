const express = require('express')
const db = require('./utils/database')
const userRouter = require('./users/users.router')


const port = 9000

const app = express()

app.get('/', (res, req) => {
    res.status(200).json({ message: 'Ok!' })
})

app.listen(() => {
    console.log(`Server started at port ${port}`)
})
app.use(express.json())
app.use('/api/v1', userRouter)

db.sync()
    .then(() => console.log("base de datos sincronizada"))
    .catch(err => console.log(err))

db.authenticate()
    .then(() => console.log("base de datos autenticada"))
    .catch(err => console.log(err))