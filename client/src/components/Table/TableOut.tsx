import React from 'react';
import {Table} from "antd";
import columns from './tableColumns'
import {ItemType} from "../../types/itemTypes";


type PropsType = {
    items: Array<ItemType>
}

const TableOut = (props:PropsType) => {
    const {items} = props
    if(items.length && items.length < 10) throw new Error("Меньше 10")
    const data = items.map(item => {
        return {
            key: item.id,
            date: item.date,
            title: item.title,
            quantity: item.quantity,
            distance: item.distance,
        }
    });
    return <div className="site-layout-background" style={{maxHeight: '100%', overflowY: "scroll"}}>
        <Table
            columns={columns}
            dataSource={data}
            pagination={{position: ['bottomRight', 'topRight']}}
        />
    </div>
};

export default TableOut;