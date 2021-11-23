const Router =require('express')
const router = new Router()
const itemRoute = require("./itemRoute")

router.use("/items", itemRoute)


module.exports = router