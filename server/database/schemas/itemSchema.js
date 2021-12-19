const {buildSchema} = require("graphql")

const schema = buildSchema(`

    type ItemType {
        id: ID
        title: String
        quantity: Int
        distance: Int
        createdAt: String
        updatedAt: String
    }
    
    input ItemInput {
        id: ID
        title: String!
        quantity: Int!
        distance: Int!
        createdAt: String
        updatedAt: String
    }
    
    type Mutations {
    createItem(input:ItemInput): ItemType
    }
    
    type Query {
        getAllItems : [ItemType]
        getByQuantity(condition: String, meaning: Int) : [ItemType]
        getByDistance(condition: String, meaning: Int) : [ItemType]
        getByTitle(contain: String) : [ItemType]
        createItem(item: ItemInput) : ItemType
    }
`)

module.exports = schema