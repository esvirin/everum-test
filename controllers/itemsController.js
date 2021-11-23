const ApiError = require("../error/apiError");
const Items = require("../database/models/itemModel")

class ItemsController {
    async getAll(req, res, next) {
        try {
            const payload = await Items.findAll()
            res.status(200).json(payload)
        } catch (e) {
            return next(ApiError.internal(e))
        }
    }

    async getWithParams(req, res, next) {
        if (!req.query) return next(ApiError.badRequest("query params required"))
        try {
            res.status(200).json(req.query)
        } catch (e) {
            return next(ApiError.internal(e))
        }
    }
}

module.exports = new ItemsController()