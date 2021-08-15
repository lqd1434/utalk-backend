import React from 'react'
import styles from './index.module.scss'
import Divider from '../../components/Divider'
import OutLookFuture from './OutLookFuture'
import DateCardList from './DateCardList'

const Home = () => {
	return (
		<div className={styles.home}>
			<DateCardList />
			<Divider marginTop={28} marginBottom={15} />
			<OutLookFuture />
		</div>
	)
}

export default Home
