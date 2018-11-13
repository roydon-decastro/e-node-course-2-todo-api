const {MongoClient, ObjectID} = require('mongodb');               // object destructuring
MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true }, (err, client) => {
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server')
    }

    console.log('COnnected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').find().toArray().then((docs) => {                             // find all
    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {           // find with query completed false
    // db.collection('Todos').find({
    //     _id: new ObjectID('5bea62390b7162cd66112616') }).toArray().then((docs) => {                
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });

    db.collection('Todos').find().count().then((count) => {                             // find all
        // db.collection('Todos').find({completed: false}).toArray().then((docs) => {           // find with query completed false
        // db.collection('Todos').find({
        //     _id: new ObjectID('5bea62390b7162cd66112616') }).toArray().then((docs) => {                
            console.log(`Todos count: ${count} `);
            // console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch todos', err)
        });

    db.collection('Users').find({age: 25}).toArray().then((docs) => {                             // find all
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err)
    });



    // client.close()
});