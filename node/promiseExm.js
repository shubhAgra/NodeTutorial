var checkDB =  require('pg').Pool;
var fs = require('fs');
const clientPG = new checkDB({
    user: 'postgres',
    password: 'tiger',
    host: 'localhost',
    database: 'test',
    port: 5432,
});
clientPG.connect();

clientPG.query(`INSERT INTO "EMPLOYEE" VALUES(4, 'NewEmployee', 'Oracle')`, (err, res) => {
    console.log(err, res)
    clientPG.end()
})

