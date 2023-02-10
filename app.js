const express = require('express')
const cors = require('cors')
const app = express()


const sitesController = require('./controllers/siteController')


app.use(express.json())
app.use(cors())

app.use('/sites', sitesController)

app.get('/', (req, res) =>{
    res.send("Welcome to BBL - Black-Owned Business List")
})

app.get('*', (req,res) =>{
    res.status(404).send("Page not found")
})

module.exports = app