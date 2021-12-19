const {Op} = require("sequelize")
const ItemModel = require("../database/models/itemModel")


const itemsController = {
    async getAllItems() {
        return await ItemModel.findAll()
    },
    async getByQuantity(payload) {
        switch (payload.condition) {
            case "=" :
                return await ItemModel.findAll({
                    where: {
                        quantity: {[Op.eq]: payload.meaning}
                    }
                })
            case ">":
                return await ItemModel.findAll({
                    where: {
                        quantity: {[Op.gt]: payload.meaning}
                    }
                })
            case "<":
                return await ItemModel.findAll({
                    where: {
                        quantity: {[Op.lt]: payload.meaning}
                    }
                })
        }
    },
    async getByDistance(payload) {
        switch (payload.condition) {
            case "=" :
                return await ItemModel.findAll({
                    where: {
                        distance: {[Op.eq]: payload.meaning}
                    }
                })
            case ">":
                return await ItemModel.findAll({
                    where: {
                        distance: {[Op.gt]: payload.meaning}
                    }
                })
            case "<":
                return await ItemModel.findAll({
                    where: {
                        distance: {[Op.lt]: payload.meaning}
                    }
                })
        }

    },
    async getByTitle(payload) {

        return await ItemModel.findAll({
            where: {
                title: {[Op.substring]: payload.contain}
            }
        })

    },
    async createItem(payload) {
        console.log(" -------  ", payload.item)
        return await ItemModel.create({
            ...payload.item
        })
    }
}

module.exports = itemsController