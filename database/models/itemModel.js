const {DataTypes} = require('sequelize');
const sequelize = require('../config')

const Items = sequelize.define("items" , {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
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
    timestamps: false
})

module.exports = Items
