const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = 8000

app.post('/register', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    const gender = req.body.gender

    if (!username || !password || !gender) {
        res.status(400).send('Не введен логин, пароль или гендер')
        return
    }

    res.status(200).send({
        "user": {
            "username": username,
            "password": password,
            "currentLevel": 0,
            "gender": gender
        }
    })
})

app.post('/login', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    if (!username || !password) {
        res.status(400).send('Не введен логин или пароль')
        return
    }

    res.status(200).send({
        "user": {
            "username": username,
            "password": password,
            "currentLevel": 921,
        }
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
