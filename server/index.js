const express = require('express')
const app = express()
const massive = require('massive')
const ctrl = require('./controller')
require('dotenv').config()
// const PORT = 4000

const { CONNECTION_STRING, SERVER_PORT } = process.env



app.use(express.json())

app.get('/api/things', ctrl.getThings)
app.post('/api/things', ctrl.newThing)
app.get('/api/things/:id', ctrl.oneThing)
app.delete('/api/things/:id', ctrl.deleteThing)
app.put('/api/things/:id', ctrl.updateThing)

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)


    app.listen(SERVER_PORT, () => console.log(`I think she is listening on ${SERVER_PORT}`))

}).catch(err => console.log(err,  'not connecting to DB Bro'))


