import React from 'react';
import {Button} from 'antd';

type PropsType = {
    isFetching: boolean,
    submitHandle: () => void
}

const submitButton = (props: PropsType) => {
    return <Button
        disabled={props.isFetching}
        type={"primary"}
        onClick={props.submitHandle}
    >Сортировать</Button>
}

export default submitButton;