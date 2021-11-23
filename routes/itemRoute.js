const Router = require('express')
const router = new Router()
const itemsController = require("../controllers/itemsController")

router.get("/", itemsController.getItems)

module.exports = router