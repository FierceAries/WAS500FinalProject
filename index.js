const express = require('express') // using express
const bodyParser = require('body-parser') //body parser
const mongoose = require('mongoose') //using mongoose
const app = express()
// require('./models/books')
// defining controller
homeController = require("./controllers/homeController")
booksController = require("./controllers/booksController")
singlebookController = require("./controllers/singlebookController")
adminController = require("./controllers/adminController")
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

// here we use books for BooksSchema
// const Books = mongoose.model("books", BooksSchema)
app.set('view engine', 'ejs')
// here we define our pages which will open on the following links:
app.get('/', homeController.get)

app.get('/admin', adminController.get)

app.get('/home', homeController.get)

app.get('/contactus', (req, res) => {
    res.render('contactus');
    console.log(req, res)
})

app.get('/contactus', (req, res) => {
    res.render('contactus');
    console.log(req, res)
})

app.get('/surveypage', (req, res) => {
    res.render('surveypage');
    console.log(req, res)
})

app.get('/honesty', (req, res) => {
    res.render('honesty');
    console.log(req, res)
})
app.get('/booksList', booksController.get)
// here we get books by ID
app.get('/books/:bookID', singlebookController.get)
app.get('/edit/:bookID', adminController.edit)
app.post('/update', adminController.update)
app.get('/addnewbook', adminController.new)
app.post('/addnewbook', adminController.addnew)
app.get('/delete/:bookID', adminController.delete)
app.get('*', function(req, res){
    console.log(req, res)
    res.status(404).send('The page you are looking for was not found!'); //here we return error of page not found, if we run into an error.
  })
app.listen(3000)