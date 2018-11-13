const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '6bea807805a1f62180f4a642';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid')
}

User.find({
    _id: id
}).then((users) => {
    console.log('Todos', users)
});

User.findOne({
    _id: id
}).then((users) => {
    console.log('Todo by find one', users)
});

User.findById(id).then((user) => {
    if(!user) {
        return console.log('ID not found')
    }
    console.log('Todo By Id', user);
}).catch((e) => console.log(e));

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo by find one', todo)
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found')
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));
