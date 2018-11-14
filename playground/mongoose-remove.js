const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo remove all

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

// Todo findOneAndRemove. We will get the document as result, but still delete the document
// Todo.findOneAndRemove

// Todo findby id and remove
Todo.findOneAndDelete('Third test todo').then((todo) => {
    console.log(todo)
});