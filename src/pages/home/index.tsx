import React from 'react'
import styles from './index.module.scss'
import DataCard from '../../components/DataCard'
import { Pane } from 'evergreen-ui'

const Home = () => {
	return (
		<div className={styles.home}>
			<Pane display={'flex'} flexDirection={'row'} justifyContent={'space-around'} paddingTop={30}>
				<DataCard />
				<DataCard />
				<DataCard />
				<DataCard />
			</Pane>
		</div>
	)
}

export default Home
