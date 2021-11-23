const Router = require('express')
const router = new Router()
const itemsController = require("../controllers/itemsController")

router.get("/", itemsController.getAll)
router.get("/:column", itemsController.getWithParams)


module.exports = router