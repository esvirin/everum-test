import React, {FC} from 'react';
import {Select} from "antd";
const {Option} = Select;
const Columns = (props:any) => {
    return <Select
        disabled={props.isFetching}
        placeholder={'Выбор колонки'}
        style={{maxWidth: 120}}
        onChange={props.changeColumnHandle}
    >
        <Option value="title">Название</Option>
        <Option value="quantity">Количество</Option>
        <Option value="distance">Расстояние</Option>
    </Select>
}

export default Columns;