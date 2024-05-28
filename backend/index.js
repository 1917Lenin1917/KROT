const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {createHash} = require("node:crypto");
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database/db.sqlite3')


const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = 8888

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
        db.run('UPDATE users SET current_level = 1, current_chapter = 1, first_login = 0 WHERE id = ?', [user.id])
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
                return
            }
            case 2: {
                const a1 = answer['a1']
                const a2 = answer['a2']
                const a3 = answer['a3']
                res.status(200).send({'a1': a1.toUpperCase() === 'ВЫСЛАННЫЕВСССР', 'a2': a2.toUpperCase() === 'НАХОДЯЩИЕСЯНАСЛУЖБЕВАНГЛИИ', 'a3': a3.toUpperCase() === 'ПРОПАЛАСВЯЗЬСАГЕНТОМ'})
                return
            }
            case 3: {
                const a1 = answer['a1']
                const a2 = answer['a2']
                const a3 = answer['a3']
                res.status(200).send({'a1': a1.toUpperCase().replaceAll(' ', '') === 'ИВАНОВА.П.', 'a2': a2.toUpperCase().replaceAll(' ', '') === 'ПРЕОБРАЖЕНСКИЙН.А.', 'a3': a3.toUpperCase().replaceAll(' ', '') === 'МИХАЙЛОВИ.С.'})
                return
            }
            case 4: {
                const a1 = answer['a1']
                const a2 = answer['a2']
                const a3 = answer['a3']
                res.status(200).send({'a1': a1.toUpperCase().replaceAll(' ', '') === 'ВАСИЛЬЕВА.В.', 'a2': a2.toUpperCase().replaceAll(' ', '') === 'КУЗНЕЦОВВ.А.', 'a3': a3.toUpperCase().replaceAll(' ', '') === 'ОДОЕВСКИЙА.А.'})
                return
            }
            case 5: {
                const a1 = answer['a1']
                const a2 = answer['a2']
                res.status(200).send({'a1': a1.toUpperCase().replaceAll(' ', '') === 'НОВИКОВФ.Я.', 'a2': a2.toUpperCase().replaceAll(' ', '') === 'СМИРНОВД.И.'})
                return
            }
            case 6: {
                const a1 = answer['a1']
                const a2 = answer['a2']
                res.status(200).send({'a1': a1.toUpperCase().replaceAll(' ', '') === 'СМИРНОВ', 'a2': a2.toUpperCase().replaceAll(' ', '') === 'ПОГИБ'})
                return
            }
            case 7: {
                const a1 = answer['a1']
                const a2 = answer['a2']
                const a3 = answer['a3']
                res.status(200).send({'a1': a1.toUpperCase().replaceAll(' ', '') === 'ВМЕСТЕ', 'a2': a2.toUpperCase().replaceAll(' ', '') === 'НОВИКОВУЕЗЖАЕТВМОСКВУ', 'a3': a3.toUpperCase().replaceAll(' ', '') === 'ВАСИЛЬЕВ'})
                return
            }
            case 8: {
                const a1 = answer['a1']
                const a2 = answer['a2']
                res.status(200).send({'a1': a1.toUpperCase().replaceAll(' ', '') === 'РАНЕН', 'a2': a2.toUpperCase().replaceAll(' ', '') === 'ВАСИЛЬЕВ'})
                return
            }
            case 9: {
                const a1 = answer['a1']
                const a2 = answer['a2']
                res.status(200).send({'a1': a1.toUpperCase().replaceAll(' ', '') === 'ОСТРОВСКИЙ', 'a2': a2.toUpperCase().replaceAll(' ', '') === 'DES'})
                return
            }
            case 10: {
                const a1 = answer['a1']
                const a2 = answer['a2']
                res.status(200).send({'a1': a1.toUpperCase().replaceAll(' ', '') === 'CED1D2D0CEC2D1CA', 'a2': a2.toUpperCase().replaceAll(' ', '') === 'CAD0CED200000000'})
                return
            }
            case 11: {
                const a1 = answer['a1']
                const a2 = answer['a2']
                const a3 = answer['a3']
                res.status(200).send({
                    'a1': a1.toUpperCase().replaceAll(' ', '') === 'FF4E1142FF0091B5',
                    'a2': a2.toUpperCase().replaceAll(' ', '') === 'FF4E1142',
                    'a3': a3.toUpperCase().replaceAll(' ', '') === 'FF0091B5',
                })
                return
            }
            case 12: {
                const a1 = answer['a1']
                const a2 = answer['a2']
                const a3 = answer['a3']
                res.status(200).send({
                    'a1': a1.toUpperCase().replaceAll(' ', '') === '11110000111100000000000010101101000001000000010100000000',
                    'a2': a2.toUpperCase().replaceAll(' ', '') === '11100001111000000000000101011010000010000000101000000001',
                    'a3': a3.toUpperCase().replaceAll(' ', '') === '3В10С1384102',
                })
                return
            }
            case 13: {
                const a1 = answer['a1']
                const a2 = answer['a2']
                res.status(200).send({
                    'a1': a1.toUpperCase().replaceAll(' ', '') === '110001001111100011000000011100100111110010101001',
                    'a2': a2.toUpperCase().replaceAll(' ', '') === '8',
                })
                return
            }
            case 14: {
                const a1 = answer['a1']
                res.status(200).send({
                    'a1': a1.toUpperCase().replaceAll(' ', '') === 'D35C95BF',
                })
                return
            }
            case 15: {
                const a1 = answer['a1']
                res.status(200).send({
                    'a1': a1.toUpperCase().replaceAll(' ', '') === '2C1284FDFF0091B5',
                })
                return
            }
            default: {
                res.status(400).send('default')
                return
            }
        }
    } catch (e) {
        res.status(400).send({'detail': 'Error'})
    }
})

app.post('/api/complete_level/:id', (req, res) => {
    const levelId = req.params.id
    const token = req.body.token
    db.all('SELECT id, username, password, current_level, current_chapter, gender, first_login FROM users', [], (err, rows) => {
        if (!rows) {
            console.log(err)
            res.status(400).send()
            return
        }
        const user = rows.find(row => {
            const hash = createHash('sha256')
            return token === hash.update(row.username + row.password).digest('hex')
        })
        if (!user) {
            res.status(400).send()
            return
        }
        console.log(user)
        try {
            db.run('UPDATE users SET current_level = ? WHERE username = ?', [Number(levelId)+1, user.username], (err, row) => {console.log(err, row)})
            res.status(200).send().end()
        } catch (e) {
            res.status(400).send({'detail': 'Error'})
        }
    })
})

app.listen(port, () => {
    try {
        console.log(`Listening on port ${port}`)
        db.run("create table if not exists users(id INTEGER primary key autoincrement, username TEXT unique, password TEXT, gender TEXT, current_level INTEGER, current_chapter INTEGER, first_login INTEGER default 1 not null, check (first_login IN (0, 1)), check (gender in ('М', 'Ж', 'ХЗ')));", (err) => {
            console.log(err)
        })
        db.run("create table if not exists user_to_colored_agent(user_id integer constraint user_fk references users, colored_agent integer);", (err) => {
            console.log(err)
        })


    } catch (e) {

    }

})

app.post('/api/current_user', (req, res) => {
    const token = req.body.token
    db.all('SELECT id, username, password, current_level, current_chapter, gender, first_login FROM users', [], (err, rows) => {
        if (!rows) {
            console.log(err)
            res.status(400).send()
            return
        }
        const user = rows.find(row => {
            const hash = createHash('sha256')
            return token === hash.update(row.username + row.password).digest('hex')
        })
        if (!user) {
            res.status(400).send({user: null})
            return
        }
        db.all('SELECT user_id, colored_agent FROM user_to_colored_agent WHERE user_id = ?', [user.id], (err, rows) => {
            res.status(200).send({
                user: {
                    username: user.username,
                    current_level: user.current_level,
                    current_chapter: user.current_chapter,
                    gender: user.gender,
                    first_login: user.first_login,
                    colored_agents: rows.map(row => row.colored_agent)
                }
            })

        })
        // console.log(user)
    })
})


app.post('/api/toggle_agent_color/', (req, res) => {
    const agent = req.body.agent
    const token = req.body.token
    db.all('SELECT id, username, password, current_level, current_chapter, gender, first_login FROM users', [], (err, rows) => {
        const user = rows.find(row => {
            const hash = createHash('sha256')
            return token === hash.update(row.username + row.password).digest('hex')
        })
        if (!user) {
            res.status(400).send()
            return
        }
        db.all('SELECT user_id, colored_agent FROM user_to_colored_agent WHERE user_id = ? AND colored_agent = ?', [user.id, Number(agent)], (err, rows) => {
            if (rows.length !== 0) {
                db.run('DELETE FROM user_to_colored_agent WHERE user_id = ? AND colored_agent = ?', [user.id, Number(agent)])
            } else {
                db.run('INSERT INTO user_to_colored_agent VALUES (?, ?)', [user.id, Number(agent)])
            }
            res.send()
        })
    })
})
