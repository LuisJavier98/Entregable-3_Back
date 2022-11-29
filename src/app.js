const express = require('express')
const db = require('./utils/database')
const userRouter = require('./users/users.router')

db.sync()
    .then(() => console.log("base de datos sincronizada"))
    .catch(err => console.log(err))

db.authenticate()
    .then(() => console.log("base de datos autenticada"))
    .catch(err => console.log(err))

const port = 9000

const app = express()

app.get('/', (req, res) => 
{ res.status(200).json({ message: 'Ok!' }) })

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
app.use(express.json())

app.use('/api/v1', userRouter)
