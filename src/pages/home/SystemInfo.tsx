import React from 'react'
import { Pane, Text } from 'evergreen-ui'

const SystemInfo = () => {
	return (
		<Pane
			borderRadius={10}
			justifyContent={'start'}
			height={'40%'}
			width={'50%'}
			border={'1px solid #422CEB'}
			marginLeft={10}
			display={'flex'}
			flexDirection={'column'}
			overflowX="hidden"
		>
			<Text
				paddingTop={15}
				borderTopLeftRadius={10}
				borderTopRightRadius={10}
				height={50}
				textAlign={'center'}
				width={'100%'}
				fontSize={20}
				fontWeight={'bold'}
				backgroundColor={'#A49BE4'}
			>
				系统公告
			</Text>
			<Text
				textOverflow={'clip'}
				textAlign={'left'}
				width={'90%'}
				paddingTop={20}
				paddingBottom={5}
				paddingLeft={5}
				marginX={10}
				borderBottom={'1px solid #422CEB'}
			>
				使用 normal-case 功能类来保留原来的外壳
			</Text>
			<Text
				textOverflow={'clip'}
				textAlign={'left'}
				width={'90%'}
				paddingTop={20}
				paddingLeft={5}
				paddingBottom={5}
				marginX={10}
				borderBottom={'1px solid #422CEB'}
			>
				使用 normal-case 功能类来保留原来的外壳
			</Text>
			<Text
				textOverflow={'clip'}
				textAlign={'left'}
				width={'90%'}
				paddingTop={20}
				paddingLeft={5}
				paddingBottom={5}
				marginX={10}
				borderBottom={'1px solid #422CEB'}
			>
				使用 normal-case 功能类来保留原来的外壳
			</Text>
			<Text
				textOverflow={'clip'}
				textAlign={'left'}
				width={'90%'}
				paddingTop={20}
				paddingLeft={5}
				paddingBottom={5}
				marginX={10}
				borderBottom={'1px solid #422CEB'}
			>
				使用 normal-case 功能类来保留原来的外壳
			</Text>
			<Text
				textOverflow={'clip'}
				textAlign={'left'}
				width={'90%'}
				paddingTop={20}
				paddingLeft={5}
				paddingBottom={5}
				marginX={10}
				borderBottom={'1px solid #422CEB'}
			>
				使用 normal-case 功能类来保留原来的外壳
			</Text>
		</Pane>
	)
}

export default SystemInfo
