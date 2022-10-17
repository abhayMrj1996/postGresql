const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'ilab!@#$%',
    port: 5432,
})
client.connect()
client.query('SELECT * FROM table_data LEFT join example on table_data."Id" = example."Id"', (err, res) => {
    console.log(res)
})
module.exports =client
