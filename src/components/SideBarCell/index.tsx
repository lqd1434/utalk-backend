import * as React from 'react'
import { ReactNode, useLayoutEffect } from 'react'
import { Pane, Text } from 'evergreen-ui'
import styles from './index.module.scss'
import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react'
import { sideBarRoute } from '../../mobx/state'
import clsx from 'clsx'
import { emitter } from '../../utils/EventEmiter'

interface PropTypes {
	Icon: ReactNode
	text: string
	route?: string
}

const SideBarCell: React.FC<PropTypes> = observer((props) => {
	const { Icon, text, route } = props
	const history = useHistory()

	const changeRoute = () => {
		if (route) {
			sideBarRoute.setRoute(route)
			history.push(route)
		}
	}

	useLayoutEffect(() => {
		emitter.emit<undefined>('sideBarMounted', undefined)

		emitter.on<string>('currentRoute', (currentRoute) => {
			if (currentRoute !== sideBarRoute.currentRoute) {
				sideBarRoute.setRoute(currentRoute)
			}
		})
	}, [])
	const isActive = sideBarRoute.currentRoute === route
	return (
		<Pane
			color={'white'}
			height={50}
			paddingY={10}
			marginX={10}
			marginY={8}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'start'}
			paddingLeft={30}
			className={clsx([styles.cell, isActive && styles.cellActive])}
			onClick={changeRoute}
		>
			{Icon}
			<Text color={'white'} size={500}>
				{text}
			</Text>
		</Pane>
	)
})

export default SideBarCell
