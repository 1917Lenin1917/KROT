const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {createHash} = require("node:crypto");
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db.sqlite3')


const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = 8000

app.post('/api/complete_tutorial', (req, res) => {
    const token = req.body.token

    if (!token) {
        res.status(400).send({'detail': 'Токен!!!'})
        return
    }

    db.all('SELECT id, username, password FROM users', [], (err, rows) => {
        const user = rows.find(row => {
            const hash = createHash('sha256')
            return token === hash.update(row.username + row.password).digest('hex')
        })
        console.log(user)
        db.run('UPDATE users SET first_login = 0 WHERE id = ?', [user.id])
        res.status(200).send({
            user: {
                username: user.username,
                current_level: 1,
                current_chapter: 1,
                gender: user.gender,
                first_login: 0
            }
        })
    })
})

app.post('/api/register', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    const gender = req.body.gender

    if (!username || !password || !gender) {
        res.status(400).send({'detail': 'Не введен логин, пароль или гендер'})
        return
    }

    console.log(username, password, gender)
    db.run("INSERT INTO users (username, gender, current_level, current_chapter, password) VALUES (?, ?, ?, ?, ?);", [username, gender, 0, 0, password], (err, row) => {
        if (err) {
            res.status(400).send({'detail': 'Пользователь с таким именем уже существует'})
            return
        }
        const hash = createHash('sha256')
        res.status(200).send({
            token: hash.update(username + password).digest('hex'),
            user: {
                username: username,
                current_level: 0,
                current_chapter: 0,
                gender: gender,
                first_login: 1
            }
        })
    })


})

app.post('/api/login', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    if (!username || !password) {
        res.status(400).send('Не введен логин или пароль')
        return
    }

    db.get("SELECT * FROM users WHERE username = ? AND password = ?", username, password, (err, user) => {

        if (!user) {
            res.status(400).send({'detail': 'Не найдено активной учетной записи'})
            return
        }

        const hash = createHash('sha256')
        res.status(200).send({
            token: hash.update(username + password).digest('hex'),
            user: {
                username: user.username,
                current_level: user.current_level,
                current_chapter: user.current_chapter,
                gender: user.gender,
                first_login: user.first_login
            }
        })
    })
})

app.post('/api/check_level_answer/:id', (req, res) => {
    const answer = req.body.answer
    const levelId = req.params.id
    const token = req.body.token
    if (!answer) {
        res.status(400).send('Не введен ответ')
        return
    }
    try {
        switch (Number(levelId)) {
            case 1: {
                const a1 = answer['a1']
                const a2 = answer['a2']
                console.log(a1, a2)
                res.status(200).send({'a1': a1.toUpperCase() === 'АНГЛИЯ', 'a2': a2.toUpperCase() === 'СТАНСТЕД'})
            }
        }
    } catch (e) {
        res.status(400).send({'detail': 'Error'})
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


// app.get('/api/create_logins', (req, res) => {
//     let str = ''
//     for (let i = 0; i < 100_000; i++) {
//         str += `('username${i}', 'М', 0, 0, 'password${i}'),`
//     }
//     console.log('123')
//     console.log(str)
//     db.run(`INSERT INTO users (username, gender, current_level, current_chapter, password) VALUES ${str.slice(0, str.length-1)}`, (err, row) => {
//         console.log(err, row)
//     })
//     console.log('456')
//     res.status(200).send()
// })

app.post('/api/current_user', (req, res) => {
    const token = req.body.token
    db.all('SELECT id, username, password, current_level, current_chapter, gender, first_login FROM users', [], (err, rows) => {
        const user = rows.find(row => {
            const hash = createHash('sha256')
            return token === hash.update(row.username + row.password).digest('hex')
        })
        console.log(user)
        res.status(200).send({
            user: {
                username: user.username,
                current_level: user.current_level,
                current_chapter: user.current_chapter,
                gender: user.gender,
                first_login: user.first_login
            }
        })
    })
})