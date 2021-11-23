import axios from 'axios'
import {ItemDataFieldType, ItemType} from "../types/itemTypes";


const create = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})


export type RequestItemsType = ItemDataFieldType | {}

const itemsApi = {
    getItems: (payload: RequestItemsType) => {
        return create.get<Array<ItemType>>('items', {data: payload}).then(response => response.data)
    }
}
export default itemsApi

