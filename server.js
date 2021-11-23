const express = require("express");
const app = express();
const mysql = require("mysql2");
require('dotenv').config()
const cors = require('cors')

const PORT = process.env.PORT || 7000
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "welbex",
});

app.use(cors())
app.use(express.json())
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`express listen ${PORT}`);
});


app.get("/api/items", function (request, response) {
    const dbConnection = new Promise(function (resolve, reject) {
        if (request.query) {
            const {column, condition, meaning} = request.query
            function checkParams(queryString) {
                return db.query(`SELECT * FROM test WHERE ${queryString};`,
                    (error, result) => {
                        error ? reject(error) : resolve(result);
                    }
                )
            }
            switch (column) {
                case 'title':
                    checkParams(`${column} ${condition} "%${meaning}%"`)
                    break;
                default:
                    checkParams(`${column} ${condition} ${meaning}`)
                    break;
            }

        }else{
            return db.query(
                `SELECT * FROM test;`,
                (error, result) => {
                    error ? reject(error) : resolve(result);
                }
            )
        }
    })
    dbConnection.then(result => {
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.write(JSON.stringify(result))
        console.log('response 200')
        response.end()

    })
})


