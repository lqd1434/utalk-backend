import * as React from 'react'
import { Pane, Text } from 'evergreen-ui'
import styles from './index.module.scss'

interface PropTypes {
	Icon: () => JSX.Element
	text: string
}

const SideBarCell: React.FC<PropTypes> = (props) => {
	const { Icon, text } = props
	return (
		<Pane
			color={'white'}
			height={50}
			paddingY={10}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'start'}
			paddingLeft={30}
			className={styles.cell}
		>
			<Icon />
			<Text color={'white'} size={500}>
				{text}
			</Text>
		</Pane>
	)
}

export default SideBarCell
