var checkDB =  require('pg/lib').Pool;
var Promise = require('promise');
const clientPG = new checkDB({
    user: 'postgres',
    password: 'tiger',
    host: 'localhost',
    database: 'test',
    port: 5432,
});
clientPG.connect()

clientPG.query(`INSERT INTO "EMPLOYEE" VALUES(4, 'NewEmployee', 'Oracle')`, (err, res) => {
    console.log(err, res)
}).then(function (clientPG) {
    clientPG.query(`INSERT INTO "EMPLOYEE" VALUES(5, 'NewEmployee1', 'Google')`, (err, res) => {
        console.log(err, res)
        clientPG.end()
    })
})

