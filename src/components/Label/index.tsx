import * as React from 'react'
import { Card, Text } from 'evergreen-ui'
import { Property } from 'csstype'

interface TextLabelProps {
	children: React.ReactNode
	backgroundColor?: Property.BackgroundColor
	color?: Property.BackgroundColor
}

const TextLabel: React.FC<TextLabelProps> = ({
	children,
	backgroundColor = '#E8E8E8',
	color = '#5D5D5D',
}) => {
	return (
		<Card
			display={'flex'}
			justifyContent={'center'}
			backgroundColor={backgroundColor}
			width={'fit-content'}
			paddingY={5}
			paddingX={10}
		>
			<Text color={color}>{children}</Text>
		</Card>
	)
}

export default TextLabel
