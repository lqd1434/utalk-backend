import * as React from 'react'
import { Avatar, HelpIcon, HomeIcon, NotificationsIcon, Pane, Pill, Text } from 'evergreen-ui'
import styles from './index.module.scss'
import { useHistory } from 'react-router-dom'

const Header = () => {
	const history = useHistory()
	return (
		<Pane
			height={70}
			display={'flex'}
			justifyContent={'space-between'}
			alignItems={'center'}
			className={styles.header}
			paddingRight={40}
			paddingLeft={20}
			backgroundColor={'#F3F9F9'}
			elevation={2}
			borderRadius={5}
		>
			<HomeIcon
				name={'U'}
				color={'gray'}
				size={18}
				cursor={'pointer'}
				onClick={() => history.push('/u/home')}
			/>
			<Pane display={'flex'} alignItems={'center'}>
				<HelpIcon size={18} marginRight={15} color={'gray'} />
				<NotificationsIcon size={18} color={'gray'} />
				<Pill color="red" marginRight={16}>
					1
				</Pill>
				<Avatar name={'U'} size={40} />
				<Text marginLeft={10} fontSize={17}>
					sky
				</Text>
			</Pane>
		</Pane>
	)
}

export default Header
