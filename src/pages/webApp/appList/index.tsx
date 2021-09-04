import { Avatar, Heading, Pane, Table } from 'evergreen-ui'
import * as React from 'react'
import { useEffect, useState } from 'react'
import '../../../mock/get'
import axios from 'axios'

type AppListItem = {
	id: number
	icon: string
	name: string
	url: string
	dayActive: string
	allActive: string
}

const AppList = () => {
	const [appList, setAppList] = useState<AppListItem[]>([])

	useEffect(() => {
		fetchAppList()
	}, [])

	const fetchAppList = async () => {
		const res: any = await axios.get('/api/appList')
		console.log(res)
		setAppList(res.data.appList as AppListItem[])
	}

	return (
		<>
			<Heading textAlign={'center'} size={900} marginTop={30}>
				应用列表
			</Heading>
			<Pane>
				<Table borderRadius={10} textAlign={'center'} marginTop={50}>
					<Table.Head
						padding={0}
						borderTopLeftRadius={10}
						borderTopRightRadius={10}
						backgroundColor={'#F1FAFC'}
					>
						<Table.TextHeaderCell flexBasis={120} flexShrink={0} flexGrow={0}>
							id
						</Table.TextHeaderCell>
						<Table.TextHeaderCell flexBasis={90} flexShrink={0} flexGrow={0}>
							图标
						</Table.TextHeaderCell>
						<Table.TextHeaderCell>名字</Table.TextHeaderCell>
						<Table.TextHeaderCell>网址</Table.TextHeaderCell>
						<Table.TextHeaderCell>日活</Table.TextHeaderCell>
						<Table.TextHeaderCell>总活</Table.TextHeaderCell>
					</Table.Head>
					<Table.Body>
						{appList.map((item, index) => {
							return (
								<Table.Row key={index}>
									<Table.TextCell flexBasis={120} flexShrink={0} flexGrow={0}>
										{item.id}
									</Table.TextCell>
									<Table.TextCell flexBasis={90} flexShrink={0} flexGrow={0}>
										<Avatar name={item.icon} />
									</Table.TextCell>
									<Table.TextCell>{item.name}</Table.TextCell>
									<Table.TextCell>{item.url}</Table.TextCell>
									<Table.TextCell>{item.dayActive}</Table.TextCell>
									<Table.TextCell>{item.allActive}</Table.TextCell>
								</Table.Row>
							)
						})}
					</Table.Body>
				</Table>
			</Pane>
		</>
	)
}

export default AppList
