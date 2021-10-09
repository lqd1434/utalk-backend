import * as React from 'react'
import { ReactNode } from 'react'
import { Pane, Text } from 'evergreen-ui'
import styles from './index.module.scss'
import { useHistory } from 'react-router-dom'

interface PropTypes {
	Icon: ReactNode
	text: string
	route?: string
}

const SideBarCell: React.FC<PropTypes> = (props) => {
	const { Icon, text, route } = props
	const history = useHistory()
	return (
		<Pane
			color={'white'}
			height={50}
			paddingY={10}
			marginX={10}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'start'}
			paddingLeft={30}
			className={styles.cell}
			onClick={route ? () => history.push(route) : () => {}}
		>
			{Icon}
			<Text color={'white'} size={500}>
				{text}
			</Text>
		</Pane>
	)
}

export default SideBarCell
