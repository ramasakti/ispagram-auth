require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./Config')
const router = require('./router/Router')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(router)

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(4300, async () => {
    console.log(`Auth server is running on port 4300`)
})