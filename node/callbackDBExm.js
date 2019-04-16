var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect(url, function (err, db) {
    db.collection('Employee').updateOne(
        {
            "EmployeeName" : "NewEmployee"
        },
        {
            $set: {"EmployeeName": "Mohan"}
        }
    );
});