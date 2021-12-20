import 'antd/dist/antd.css'
import React, {useEffect, useState} from 'react'
import {Layout, message} from 'antd'
import HeaderBar from "./components/Header/HeaderBar"
import TableOut from "./components/Table/TableOut"
import {GET_ALL_ITEMS} from "./api/itemsQuery"
import {ItemType} from "./types/itemTypes"
import {ErrorBoundary} from "react-error-boundary"
import ErrorHandler from "./components/Errors/ErrorHandler"
import {request, gql, GraphQLClient} from 'graphql-request'

const {Header, Content, Footer} = Layout

function App() {

	const client = new GraphQLClient("http://localhost:5000/graphql", {
		headers: {
			"Content-Type": "application/json"
		}
	})

	const [requestFields, setRequestFields] = useState({} as any)
	const [items, setItems] = useState([] as Array<ItemType>)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		client.request(GET_ALL_ITEMS).then((data) => {
			if (data) setItems(data.getAllItems)
		}).finally(() => setLoading(false))
	}, [])

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