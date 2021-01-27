import { Application } from 'express'
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

app.listen(mainPort, () => console.log(`[Info]: App listening on port ${mainPort}`))

export default app