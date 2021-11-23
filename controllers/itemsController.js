const ApiError = require("../error/apiError");
const Items = require("../database/models/itemModel")

class ItemsController {
    async getItems(req, res, next) {
        try {
            const payload = await Items.findAll()
            res.status(200).json(payload)
        } catch (e) {
            return next(ApiError.internal(e))
        }
    }
}

module.exports = new ItemsController()