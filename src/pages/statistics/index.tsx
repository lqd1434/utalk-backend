import * as React from 'react'
import '../../mock/get'
import { Avatar, Heading, Pane, Text } from 'evergreen-ui'
import LineMap from './LineMap'
import Divider from '../../components/Divider'

const Statistics = () => {
	return (
		<Pane backgroundColor={'#F5F8FA'} paddingTop={0} marginTop={-20}>
			<Heading textAlign={'center'} color={'#005BEE'} size={900} marginTop={20} marginBottom={20}>
				统计数据
			</Heading>
			<Pane display={'flex'} flexDirection="row">
				<LineMap />
				<Pane
					width={screen.availWidth - 940}
					marginTop={30}
					borderRadius={20}
					backgroundColor={'#ADB1F0'}
					marginLeft={60}
				>
					<Pane
						display={'flex'}
						flexDirection="row"
						padding={20}
						justifyContent={'space-between'}
						alignItems={'end'}
					>
						<Pane fontSize={50} height={60} color={'#6769B4'} marginLeft={20}>
							88<span style={{ fontSize: 22 }}>人</span>
						</Pane>
						<Pane fontSize={35} height={60} paddingTop={10} color={'#D3E0E9'} marginRight={20}>
							实时在线
						</Pane>
					</Pane>
					<Heading marginLeft={20} color={'#005BEE'} size={500} marginTop={20} marginBottom={20}>
						在线用户
					</Heading>
					<Pane>
						<Pane
							display={'flex'}
							marginLeft={20}
							marginTop={20}
							alignItems={'center'}
							justifyContent={'start'}
						>
							<Avatar name={'UK'} size={50} marginRight={13} />
							<Text fontSize={20}>Sky Mark</Text>
						</Pane>
						<Divider color={'gray'} />
						<Pane
							display={'flex'}
							marginLeft={20}
							marginTop={20}
							alignItems={'center'}
							justifyContent={'start'}
						>
							<Avatar name={'UK'} size={50} marginRight={13} />
							<Text fontSize={20}>Sky Mark</Text>
						</Pane>
						<Divider color={'gray'} />
						<Pane
							display={'flex'}
							marginLeft={20}
							marginTop={20}
							alignItems={'center'}
							justifyContent={'start'}
						>
							<Avatar name={'UK'} size={50} marginRight={13} />
							<Text fontSize={20}>Sky Mark</Text>
						</Pane>
						<Divider color={'gray'} />
					</Pane>
					<Text float={'right'} marginRight={20} fontSize={20} cursor={'pointer'} userSelect={'none'}>
						查看更多
					</Text>
				</Pane>
			</Pane>
		</Pane>
	)
}

export default Statistics
