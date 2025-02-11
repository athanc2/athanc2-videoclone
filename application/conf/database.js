const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '2002',
    database: 'videoapp',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 20,
    idleTimeout: 1000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
})

module.exports = pool.promise();