import React from 'react';
import {Alert, Button} from "antd";

type PropsType = {
    error: Error;
    resetErrorBoundary: (...args: Array<unknown>) => void;
}

function ErrorHandler(props: PropsType) {
    const {error, resetErrorBoundary} = props
    return <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "5%",
        justifyContent: "space-between",
        height: "10%"
    }}>
        <Alert
            message="Упс! Что то пошло не так"
            description={error.message}
            type="error"

        />
        <Button onClick={resetErrorBoundary}>Сбросить</Button>
    </div>
}

export default ErrorHandler