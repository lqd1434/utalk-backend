import React, { useEffect, useState } from 'react'
import {
	Autocomplete,
	Avatar,
	Button,
	Dialog,
	Heading,
	Pagination,
	Pane,
	PeopleIcon,
	SearchIcon,
	Select,
	Switch,
	Table,
	Text,
	TextInput,
} from 'evergreen-ui'
import PasswordInput from '../../components/PwdInput'
import '../../mock/get'
import axios from 'axios'

type ProfilesItem = {
	id: number
	image: string
	name: string
	email: string
	number: string
	password: string
}

const UserList = () => {
	const [page, setPage] = useState(1)
	const [isShow, setIsShow] = useState(false)
	const [checked, setChecked] = React.useState(true)
	const [profiles, setProfiles] = useState<ProfilesItem[]>([])
	const [searchItems, setSearchItems] = useState<string[]>([])
	const [searchType, setSearchType] = useState('ID')

	useEffect(() => {
		fetchUserList({ page: 1, limit: 10 }).then((value) => {
			console.log(value)
		})
	}, [])

	const fetchUserList = async (props: { page: number; limit: number }) => {
		const data = await axios.get('/api/userList', {
			responseType: 'json',
			params: {
				page: props.page,
				limit: props.limit,
			},
		})
		console.log(data)
		setProfiles(() => data.data.userList)
		const tem = (data.data.userList as ProfilesItem[]).map((item: ProfilesItem) => {
			return item.name
		})
		setSearchItems(tem)
	}

	return (
		<Pane paddingTop={10} marginX={20} marginBottom={30}>
			<Heading size={900} marginTop={16} textAlign={'center'} paddingBottom={20}>
				用户列表
			</Heading>
			<Pane paddingBottom={20} height={50} display={'flex'} justifyContent="space-between">
				<Pane display={'flex'} flexDirection={'row'} justifyContent="space-around">
					{/*<SearchInput placeholder="搜索" marginRight={10} width={200} />*/}
					<Autocomplete
						title={searchType}
						onChange={(changedItem) => console.log(changedItem)}
						items={searchItems}
					>
						{(props) => {
							const { getInputProps, getRef, inputValue } = props
							return <TextInput placeholder="请输入搜索词" ref={getRef} {...getInputProps()} />
						}}
					</Autocomplete>
					<Pane display={'flex'} flexDirection={'row'} marginLeft={10}>
						<Select
							width={80}
							onChange={(event) => {
								setSearchType(event.target.value)
							}}
						>
							<option value="ID">ID</option>
							<option value="name">name</option>
							<option value="email">email</option>
							<option value="UU号">UU号</option>
						</Select>
						<Button marginLeft={10}>
							<SearchIcon marginRight={5} />
							<Text>搜索</Text>
						</Button>
					</Pane>
				</Pane>
				<Button marginRight={20}>
					<PeopleIcon marginRight={5} />
					<Text>{'总计: ' + profiles.length}</Text>
				</Button>
			</Pane>
			<Table borderRadius={10} textAlign={'center'}>
				<Table.Head
					padding={0}
					borderTopLeftRadius={10}
					borderTopRightRadius={10}
					backgroundColor={'#F1FAFC'}
				>
					<Table.TextHeaderCell flexBasis={40} flexShrink={0} flexGrow={0}>
						id
					</Table.TextHeaderCell>
					<Table.TextHeaderCell>名字</Table.TextHeaderCell>
					<Table.TextHeaderCell>uu号</Table.TextHeaderCell>
					<Table.TextHeaderCell>邮箱</Table.TextHeaderCell>
					<Table.TextHeaderCell>密码</Table.TextHeaderCell>
					<Table.TextHeaderCell>头像</Table.TextHeaderCell>
					<Table.TextHeaderCell>权限</Table.TextHeaderCell>
				</Table.Head>
				<Table.Body>
					{profiles.map((item, index) => {
						return (
							<Table.Row key={index}>
								<Table.TextCell flexBasis={60} flexShrink={0} flexGrow={0}>
									{item.id}
								</Table.TextCell>
								<Table.TextCell>{item.name}</Table.TextCell>
								<Table.TextCell>{item.number}</Table.TextCell>
								<Table.TextCell>{item.email}</Table.TextCell>
								<Table.TextCell>
									<PasswordInput value={item.password} />
								</Table.TextCell>
								<Table.TextHeaderCell>
									<Avatar name={item.name} size={40} />
								</Table.TextHeaderCell>
								<Table.TextCell>
									<Text
										cursor={'pointer'}
										userSelect={'none'}
										color={'#3ECBCB'}
										onClick={() => {
											setIsShow(true)
										}}
									>
										权限管理
									</Text>
								</Table.TextCell>
							</Table.Row>
						)
					})}
				</Table.Body>
			</Table>
			<Pagination
				page={page}
				totalPages={10}
				float={'right'}
				marginBottom={30}
				marginTop={20}
				onPageChange={(page: number) => {
					setPage(page)
					if (page === 10) {
						console.log('10000')
						fetchUserList({ page: page, limit: 6 })
					}
					fetchUserList({ page: page, limit: 10 })
				}}
				onNextPage={() => {
					setPage(page + 1)
				}}
				onPreviousPage={() => {
					setPage(page - 1)
				}}
			/>
			<Dialog
				isShown={isShow}
				title="权限管理"
				onCloseComplete={() => setIsShow(false)}
				confirmLabel="保存"
				cancelLabel={'取消'}
			>
				<Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />
			</Dialog>
		</Pane>
	)
}

export default UserList
