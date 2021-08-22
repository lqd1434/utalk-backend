import React from 'react'
import { Card, Heading, Pane, Table, Text } from 'evergreen-ui'
import TextLabel from '../../components/Label'
import PasswordInput from '../../components/PwdInput'

const AdminManage = () => {
	return (
		<Pane marginTop={20} marginLeft={20}>
			<Pane display={'flex'}>
				<Card
					display={'flex'}
					paddingY={40}
					paddingX={40}
					marginRight={15}
					justifyContent={'center'}
					alignItems={'center'}
					backgroundColor={'#66D6D6'}
				>
					<Text fontSize={25}>管理员</Text>
				</Card>
				<Pane display={'flex'} flexDirection={'column'} justifyContent="space-around">
					<Heading size={600}>恪尽职守</Heading>
					<Text userSelect={'none'}>
						管理员是管理一个系统能够稳定,规范运转的根本,作为一个管理员,我们必须时刻牢记自己的职责,优化用户体验,维持系统稳定运转
					</Text>
					<TextLabel>总数:10</TextLabel>
				</Pane>
			</Pane>
			<Table borderRadius={10} textAlign={'center'} marginTop={50}>
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
									<PasswordInput value={'1434288333333333'} />
								</Table.TextCell>
								<Table.TextCell>
									<Text cursor={'pointer'} userSelect={'none'} color={'#3ECBCB'}>
										权限管理
									</Text>
								</Table.TextCell>
							</Table.Row>
						)
					})}
				</Table.Body>
			</Table>
		</Pane>
	)
}

export default AdminManage
