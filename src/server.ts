import { Application } from 'express'
import session from 'express-session'
const { mainPort } = require('../settings/config.json')
import { join } from 'path'

const express = require('express')
const bodyParser = require('body-parser')


const app: Application = express()


app.set('views', join(__dirname, '..' , 'views'))
app.set('view engine', 'pug')

app.use(express.static(join(__dirname, '..' , 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const randomSecret = () => {
    const charset: string[] = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
    let ok: string[] = []; for (let i = 0; i <= 30; i++) {
        ok.push(charset[~~(Math.random() * charset.length)])
    }
    return `mocek to kurwa jebana i nie zdobedze tego sekretu nigdy a numer to ${ok.join("")}`
}

const SESSION: any = session

app.use(SESSION({
    secret: `mocek to kurwa jebana i nie zdobedze tego sekretu nigdy`,
    cookie: {
        maxAge: 6000000
    }, 
}))

app.listen(mainPort, () => console.log(`[Info]: App listening on port ${mainPort}`))

export default app