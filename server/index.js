const express = require("express");
const app = express();
require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT || 7000
const path = require("path")
const itemSchema = require("./database/schemas/itemSchema")
const sequelize = require('./database/config')
const itemModel = require('./database/models/itemModel')
const router = require("./controllers/router")
const errorHandler = require('./middleware/errorHandlingMiddleware')
const {graphqlHTTP} = require("express-graphql");

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "..", "client", "public")));


app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: itemSchema,
    rootValue: {...router},
}))


// important! last Middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
    } catch (e) {
        console.log(e)
    }
}

start()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`express listen ${PORT}`);
        });
    })

