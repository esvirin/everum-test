import React, {PropsWithChildren, useState} from 'react';


import Columns from "./Columns";
import SubmitButton from './SubmitButton';
import {ItemDataFieldType} from "../../types/itemTypes";
import {Col, Input, Row, Select} from "antd"

type HeaderBarPropsType = {
    isFetching: boolean,
    setRequestFields: ({}: ItemDataFieldType) => void
}

type EventHandleType = {
    target: HTMLInputElement;
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
    const changeMeaningHandle = (event: EventHandleType) => {
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
