const {MongoClient, ObjectID} = require('mongodb');               // object destructuring
MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true }, (err, client) => {
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server')
    }

    console.log('COnnected to MongoDB server');
    const db = client.db('TodoApp')


    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bea5f815f06982540ce26c8') 
    }, {
        $set: {
            location: "New York"
        },
        $inc: {
            age: 4

        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    // client.close()
});