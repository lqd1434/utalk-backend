import * as React from 'react'
import { ReactNode } from 'react'
import { Avatar, Card, Pane, Text } from 'evergreen-ui'
import styles from './index.module.scss'
import { Property } from 'csstype'

interface PropTypes {
	icon?: ReactNode
	count?: number
	title?: string
	bgColor?: Property.BackgroundColor
}

const DataCard: React.FC<PropTypes> = ({ icon, title = '', count = 0, bgColor = 'white' }) => {
	return (
		<Card width={230} height={130} backgroundColor={bgColor} elevation={2} borderRadius={7} padding={5}>
			<Pane className={styles.con} height={120}>
				<Pane paddingLeft={10} paddingTop={10} gridArea={'leftIcon'}>
					<Avatar name={'U'} size={60} />
				</Pane>
				<Pane gridArea={'rightTopData'} paddingTop={20}>
					<Text fontSize={30}>345</Text>
				</Pane>
				<Pane paddingLeft={5} gridArea={'rightBottomData'}>
					<Text size={300}>新增用户</Text>
				</Pane>
				<Pane gridRow={2} paddingLeft={20} gridArea={'bottomData'}>
					<Text>统计时间:2021年8月12日</Text>
				</Pane>
			</Pane>
		</Card>
	)
}

export default DataCard
