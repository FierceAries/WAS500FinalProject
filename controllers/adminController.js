// here we call the books model
const Books = require('../models/books')
exports.get = (req, res) => {
    console.log(req, res)
    Books.find({}, function(err, data) {
        res.render('admin', {
            books: data
        })
    })
}
// Here we call for the 'addnewbook'
exports.new = (req, res) => {
    console.log(req, res)
    res.render('addnewbook')
}
// This function allows us to another book, with its name and Author.
exports.addnew = (req, res) => {
    console.log(req, res)
    var newBook = new Books()
    newBook.name = req.body.name,
    newBook.author_name = req.body.author_name
    newBook.save((err, doc) => {
        if(!err)
            res.redirect('/admin')
        else{
            console.log('Error:' + err)
        }
    })
}
// This function allows us to make an edit to the already entered entries
exports.edit = (req, res) => {
    console.log(req, res)
    Books.findOne({'_id': req.params.bookID}, function(err, data) {
        res.render('edit', {
            book: data
        })
    })
}
// This function allows to make changes to record of books/or to an entry after we click edit.
exports.update = (req, res) => {
    console.log(req, res)
    Books.findOneAndUpdate({_id:req.body.id}, {
        $set: {
            name: req.body.name,
            author_name: req.body.author_name
        }
    })
    .then(result => {
        res.redirect('/admin')
    })
}
//function for deleting books that are available to us.
exports.delete = (req, res) => {
    console.log(req, res)
    Books.remove({_id:req.params.bookID})
    .then(result => {
        res.redirect('/admin')
    })
}