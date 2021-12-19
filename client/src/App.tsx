import 'antd/dist/antd.css'
import React, {useEffect, useState} from 'react'
import {Layout, message} from 'antd'
import HeaderBar from "./components/Header/HeaderBar"
import TableOut from "./components/Table/TableOut"
import itemsApi, {RequestItemsType} from "./api/itemsApi"
import {ItemType} from "./types/itemTypes"

import {ErrorBoundary} from "react-error-boundary"
import ErrorHandler from "./components/Errors/ErrorHandler"

const {Header, Content, Footer} = Layout

function App() {

	const [isFetching, setIsFetching] = useState(false as boolean)
	const [items, setItems] = useState([] as Array<ItemType>)
	const [requestFields, setRequestFields] = useState({} as RequestItemsType)

	const fetchItems = async (payload: RequestItemsType) => {
		setIsFetching(true)
		try {
			return await itemsApi.getItems(payload)
		} catch (e: any) {
			message.error(e)
		} finally {
			setIsFetching(false)
		}
	}

	useEffect(() => {
		fetchItems(requestFields).then(data => {
			if (data) setItems(data)
		})
	}, [requestFields])

	return (
		<Layout style={{height: '100vh'}}>
			<Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
				<HeaderBar isFetching={isFetching} setRequestFields={setRequestFields}/>
			</Header>
			<Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
				<ErrorBoundary
					FallbackComponent={ErrorHandler}
					onReset={() => setRequestFields({})}
					resetKeys={[requestFields]}
				>
					<TableOut items={items}/>
				</ErrorBoundary>
			</Content>
			<Footer style={{textAlign: 'center'}}>Created by <a href="mailto:esvirin@mail.com">esvirin@mail.com</a>
			</Footer>
		</Layout>
	)
}

export default App