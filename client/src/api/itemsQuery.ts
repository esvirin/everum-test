import {ItemDataFieldType, ItemType} from "../types/itemTypes"
import {gql} from "@apollo/client"

export const GET_ALL_ITEMS = gql`
    query{
        getAllItems{
            id
            title
            quantity
            distance
            createdAt
        }
    }
`



