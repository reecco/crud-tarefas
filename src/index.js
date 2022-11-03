import express from 'express'
import bodyParser from 'body-parser'

import routes from './routes.js'

const app = express()

app.use(express.static('frontend'))
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs')

app.use('/', routes)

export default app