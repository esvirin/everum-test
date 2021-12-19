const {DataTypes} = require('sequelize');
const sequelize = require('../config')

const ItemModel = sequelize.define("items" , {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    distance: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    timestamps: true
})

module.exports = ItemModel
