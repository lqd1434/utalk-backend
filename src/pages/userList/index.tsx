import React, { useEffect, useState } from 'react'
import {
	Button,
	Dialog,
	Heading,
	Pagination,
	Pane,
	PeopleIcon,
	SearchIcon,
	SearchInput,
	Select,
	Switch,
	Table,
	Text,
} from 'evergreen-ui'
import PasswordInput from '../../components/PwdInput'

const profiles: { id: number; name: string; number: string; password: string }[] = []
const UserList = () => {
	const [page, setPage] = useState(1)
	const [isShow, setIsShow] = useState(false)
	const [checked, setChecked] = React.useState(true)

	useEffect(() => {
		for (let i = 0; i < 20; i++) {
			profiles.push({ id: i, name: 'last', number: '1434288', password: '134567' })
		}
	}, [])
	return (
		<Pane paddingTop={10} marginX={20} marginBottom={30}>
			<Heading size={900} marginTop={16} textAlign={'center'} paddingBottom={20}>
				用户列表
			</Heading>
			<Pane paddingBottom={20} height={50} display={'flex'} justifyContent="space-between">
				<Pane>
					<SearchInput placeholder="搜索" marginRight={10} width={200} />
					<Select
						onChange={(event) => {
							console.log(event.target.value)
						}}
					>
						<option value="foo">Foo</option>
						<option value="bar">Bar</option>
					</Select>
					<Button marginLeft={10}>
						<SearchIcon marginRight={5} />
						<Text>搜索</Text>
					</Button>
				</Pane>
				<Button marginRight={20}>
					<PeopleIcon marginRight={5} />
					<Text>总计: 11</Text>
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
					<Table.TextHeaderCell>权限</Table.TextHeaderCell>
				</Table.Head>
				<Table.Body>
					{[1, 2, 3, 4, 5, 8, 6, 8, 9, 0, 99].fill(1, 0, 20).map((item, index) => {
						return (
							<Table.Row key={index}>
								<Table.TextCell flexBasis={40} flexShrink={0} flexGrow={0}>
									{index}
								</Table.TextCell>
								<Table.TextCell>{'jack'}</Table.TextCell>
								<Table.TextCell>{'123458'}</Table.TextCell>
								<Table.TextCell>1434288209@qq.com</Table.TextCell>
								<Table.TextCell>
									<PasswordInput value={'1434288'} />
								</Table.TextCell>
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
				totalPages={100}
				float={'right'}
				marginBottom={30}
				marginTop={20}
				onPageChange={(page: number) => {
					setPage(page)
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
