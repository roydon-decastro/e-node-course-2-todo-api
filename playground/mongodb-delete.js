const {MongoClient, ObjectID} = require('mongodb');               // object destructuring
MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true }, (err, client) => {
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server')
    }

    console.log('COnnected to MongoDB server');
    const db = client.db('TodoApp')


    db.collection('Users').deleteMany({name: "Paris"});
    db.collection('Users').findOneAndDelete({name: "Paris"});


    // client.close()
});