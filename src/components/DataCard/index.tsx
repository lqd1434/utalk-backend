import * as React from 'react'
import { Avatar, Card, Pane, Text } from 'evergreen-ui'
import styles from './index.module.scss'

const DataCard = () => {
	return (
		<Card width={230} height={130} backgroundColor={'white'} elevation={2} borderRadius={7} padding={5}>
			<Pane className={styles.con} height={120}>
				<Pane gridRow={1} className={styles.topRow}>
					<Pane paddingLeft={10} paddingTop={10}>
						<Avatar name={'U'} size={60} />
					</Pane>
					<Pane className={styles.leftRow}>
						<Pane>
							<Text fontSize={30}>345</Text>
						</Pane>
						<Pane paddingLeft={5}>
							<Text size={300}>新增用户</Text>
						</Pane>
					</Pane>
				</Pane>
				<Pane gridRow={2} paddingLeft={20}>
					<Text>统计时间:2021年8月12日</Text>
				</Pane>
			</Pane>
		</Card>
	)
}

export default DataCard
