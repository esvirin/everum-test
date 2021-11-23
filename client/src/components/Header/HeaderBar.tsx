import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {Button, Col, Input, message, Row, Select} from 'antd';

import Columns from "./Columns";
import SubmitButton from './SubmitButton';
import itemsApi from "../../api/itemsApi";
import {ItemDataFieldType} from "../../types/itemTypes";

type HeaderBarPropsType = {
    isFetching: boolean,
    setRequestFields: ({}: ItemDataFieldType) => void
}

const {Option} = Select;

const HeaderBar = (props: PropsWithChildren<HeaderBarPropsType>) => {

    const {isFetching, setRequestFields} = props

    let [columnValue, changeColumn] = useState('')
    let [conditionValue, changeCondition] = useState('')
    let [meaningValue, changeMeaning] = useState('')

    const changeColumnHandle = (value: string) => {
        changeColumn(columnValue = value)
    }
    const changeConditionHandle = (value: string) => {
        changeCondition(conditionValue = value)
    }
    const changeMeaningHandle = (event: any) => {
        changeMeaning(meaningValue = event.target.value)
    }
    const submitHandle = () => {

        setRequestFields({
            column: columnValue,
            condition: conditionValue,
            meaning: meaningValue
        })
    }
    return <Row>
        <Col span={4}><Columns isFetching={isFetching} changeColumnHandle={changeColumnHandle}/> </Col>

        {columnValue === 'distance' &&
        <Col span={20}>
            <Select
                disabled={isFetching}
                placeholder={'Выбор условия'}
                style={{maxWidth: 120}}
                onChange={changeConditionHandle}
            >
                <Option value="=">равно</Option>
                <Option value=">">больше</Option>
                <Option value="<">меньше</Option>
            </Select>
            <Input
                disabled={isFetching}
                type={"number"}
                style={{width: 120}}
                onChange={changeMeaningHandle}
            />
            <SubmitButton isFetching={isFetching} submitHandle={submitHandle}/>
        </Col>
        }

        {
            columnValue === 'quantity' &&
            <Col span={20}>
                <Select
                    disabled={isFetching}
                    placeholder={'Выбор условия'}
                    style={{maxWidth: 120}}
                    onChange={changeConditionHandle}
                >
                    <Option value="=">равно</Option>
                    <Option value=">">больше</Option>
                    <Option value="<">меньше</Option>
                </Select>
                <Input
                    disabled={isFetching}
                    type={"number"}
                    style={{width: 120}}
                    onChange={changeMeaningHandle}
                />
                <SubmitButton isFetching={isFetching} submitHandle={submitHandle}/>
            </Col>
        }

        {columnValue === 'title' &&
        <Col span={20}>
            <Select
                disabled={isFetching}
                placeholder={'Выбор условия'}
                style={{maxWidth: 120}}
                onChange={changeConditionHandle}
            >
                <Option value="like">содержит</Option>
            </Select>
            <Input
                disabled={isFetching}
                type={"text"}
                style={{width: 120}}
                onChange={changeMeaningHandle}
            />
            <SubmitButton isFetching={isFetching} submitHandle={submitHandle}/>
        </Col>}


    </Row>
}

export default HeaderBar
