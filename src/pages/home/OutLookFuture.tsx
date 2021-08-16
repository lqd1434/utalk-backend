import React from 'react'
import { Card, Pane, Text } from 'evergreen-ui'

const OutLookFuture = () => {
	return (
		<Card
			float={'right'}
			marginLeft={10}
			marginRight={20}
			border={'1px solid #2DA8A8'}
			width={'40%'}
			borderRadius={11}
			height={'27%'}
			display={'flex'}
			flexDirection={'column'}
		>
			<Pane
				backgroundColor={'#3ECBCB'}
				height={50}
				display={'flex'}
				justifyContent={'center'}
				alignItems="center"
				borderTopLeftRadius={11}
				borderTopRightRadius={11}
			>
				<Text fontSize={20} color={'white'} fontWeight="bold">
					功能展望
				</Text>
			</Pane>
			<Text
				paddingLeft={20}
				paddingY={10}
				backgroundColor={'#A4CAFF'}
				borderRadius={8}
				marginX={10}
				marginTop={20}
				marginBottom={10}
				color={'white'}
				fontWeight="bold"
			>
				完成用户列表
			</Text>
			<Text
				paddingLeft={20}
				paddingY={10}
				backgroundColor={'#C9C3EF'}
				borderRadius={8}
				marginX={10}
				marginTop={10}
				marginBottom={10}
				color={'white'}
				fontWeight="bold"
			>
				完成用户列表
			</Text>
			<Text
				paddingLeft={20}
				paddingY={10}
				backgroundColor={'#F9DADA'}
				borderRadius={8}
				marginX={10}
				marginTop={10}
				marginBottom={10}
				color={'white'}
				fontWeight="bold"
			>
				完成用户列表
			</Text>
			<Text
				paddingLeft={20}
				paddingY={10}
				backgroundColor={'#66D6D6'}
				borderRadius={8}
				marginX={10}
				marginTop={10}
				marginBottom={10}
				color={'white'}
				fontWeight="bold"
			>
				完成用户列表
			</Text>
		</Card>
	)
}

export default OutLookFuture
