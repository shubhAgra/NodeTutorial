var checkDB =  require('pg').Pool;
var promise = require('promise');
const clientPG = new checkDB({
    user: 'postgres',
    password: 'tiger',
    host: 'localhost',
    database: 'test',
    port: 5432,
});
clientPG.connect();

clientPG.query(`INSERT INTO "EMPLOYEE" VALUES(1, 'SHUBHENDU', 'Yash')`, (err, res) => {
    console.log(err, res)
    clientPG.end()
})
