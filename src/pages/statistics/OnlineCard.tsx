import { Avatar, Heading, Pane, Text } from 'evergreen-ui'
import Divider from '../../components/Divider'
import * as React from 'react'

export const OnlineCard = () => {
	return (
		<Pane
			width={screen.availWidth - 940}
			marginTop={30}
			borderRadius={20}
			backgroundColor={'#85E2F9'}
			marginLeft={60}
		>
			<Pane
				display={'flex'}
				flexDirection="row"
				padding={20}
				justifyContent={'space-between'}
				alignItems={'end'}
			>
				<Pane fontSize={50} height={60} color={'#825EFF'} marginLeft={20}>
					88<span style={{ fontSize: 22 }}>人</span>
				</Pane>
				<Pane fontSize={35} height={60} paddingTop={10} color={'#3461ED'} marginRight={20}>
					实时在线
				</Pane>
			</Pane>
			<Heading marginLeft={20} color={'#005BEE'} size={500} marginTop={20} marginBottom={20}>
				在线用户
			</Heading>
			<Pane>
				<Pane display={'flex'} marginLeft={20} marginTop={20} alignItems={'center'} justifyContent={'start'}>
					<Avatar name={'UK'} size={50} marginRight={13} />
					<Text fontSize={20}>Sky Mark</Text>
				</Pane>
				<Divider color={'gray'} />
				<Pane display={'flex'} marginLeft={20} marginTop={20} alignItems={'center'} justifyContent={'start'}>
					<Avatar name={'UK'} size={50} marginRight={13} />
					<Text fontSize={20}>Sky Mark</Text>
				</Pane>
				<Divider color={'gray'} />
				<Pane display={'flex'} marginLeft={20} marginTop={20} alignItems={'center'} justifyContent={'start'}>
					<Avatar name={'UK'} size={50} marginRight={13} />
					<Text fontSize={20}>Sky Mark</Text>
				</Pane>
				<Divider color={'gray'} />
			</Pane>
			<Text float={'right'} marginRight={20} fontSize={20} cursor={'pointer'} userSelect={'none'}>
				查看更多
			</Text>
		</Pane>
	)
}
