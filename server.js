//Require dependancies
const express = require('express')
const PORT = 3000
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()


let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'banki-questions'


MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true})
    .then(client => {
        console.log(`Connected to ${dbName} database`)
        db = client.db(dbName)
      
    })
//parse requests of content-type
// app.use(bodyParser.urlencoded({ extended: true }))

// app.use(bodyParser.json())

app.set('view engine', 'ejs')
//allows you to render data to an ejs template
app.use(express.static('public'))
//allows for css and client side js to render on template
app.use(express.urlencoded({ extended: true }))
//middleware for parsing bodies from URL
app.use(express.json())
//parses incoming JSON requests and puts the parsed data in req.body


app.get('/', (req,res) => {
    res.render('index.ejs')
})
app.get('/add-edit-delete', (req,res) => {
    db.collection('questions').find().toArray()
    .then(results => {
        res.render('add-edit-delete.ejs', { questions: results})
    })
    .catch(error => console.error(error))
    //will add more later
})

app.post('/api', (req,res) => {
    console.log('post heard')
    db.collection('questions').insertOne(
        req.body
    )
    .then(result => {
        console.log(result)
        console.log(req.body)
       res.redirect('/')//redirecting to the same page for now
      
    })
    .catch(error => console.error(error))
})

// put requests
app.put('/updateEntry', (req,res) => {
    console.log(req.body)
    //converts the request body into an array and checks for falsy values with a forEach loop, if it's empty, delete it
    Object.keys(req.body).forEach(key => {
        if(req.body[key] === null || req.body[key] === undefined || req.body[key] === ''){
            delete req.body[key]
        }
    })
    console.log(req.body)
    db.collection('questions').findOneAndUpdate(
        //query,update,options
        { question: req.body.question },
        {
            $set: req.body
        }
    )
    .then(result => {
        console.log(result)
        res.json('success')
    })
    .catch(error => console.error(error))
})

app.delete('/deleteQuestion', (req,res) => {
    db.collection('questions').deleteOne({topic: req.body.topic }, {question: req.body.question}, {answer: req.body.answer})
    .then(result => {
        console.log('Entry deleted')
        res.json('Entry Deleted')
        console.log(JSON.stringify(req.body.topic, req.body.question, req.body.answer))
    })
    .catch(err => console.error(err))
})
app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${PORT}`))