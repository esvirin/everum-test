import 'antd/dist/antd.css'
import React, {useEffect, useState} from 'react'
import {Layout, message} from 'antd'
import HeaderBar from "./components/Header/HeaderBar"
import TableOut from "./components/Table/TableOut"
import {GET_ALL_ITEMS} from "./api/itemsQuery"
import {ItemType} from "./types/itemTypes"
import {ErrorBoundary} from "react-error-boundary"
import ErrorHandler from "./components/Errors/ErrorHandler"
import {useQuery} from '@apollo/client'

const {Header, Content, Footer} = Layout

function App() {
	const {data, loading, error} = useQuery(GET_ALL_ITEMS)
	const [requestFields, setRequestFields] = useState({} as any)
	const [items, setItems] = useState([] as Array<ItemType>)

	useEffect(()=>{
		if(data) setItems(data.getAllItems)
	},[data])

	return (
		<Layout style={{height: '100vh'}}>
			<Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
				<HeaderBar isFetching={loading} setRequestFields={setRequestFields}/>
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