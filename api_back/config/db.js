const mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database: 'dbjirama'
})

connection.connect()

module.exports = connection