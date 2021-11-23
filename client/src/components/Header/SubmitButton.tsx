import React, {FC} from 'react';
import {Button} from 'antd';

const submitButton = (props:any) => {
    return <Button
        disabled={props.isFetching}
        type={"primary"}
        onClick={props.submitHandle}
    >Сортировать</Button>
}

export default submitButton;