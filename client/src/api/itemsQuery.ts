import {ItemDataFieldType, ItemType} from "../types/itemTypes"
import { gql } from 'graphql-request'

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



