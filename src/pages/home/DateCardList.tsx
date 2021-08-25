import React from 'react'
import DataCard from '../../components/DataCard'
import { Pane } from 'evergreen-ui'

const DateCardList = () => {
	return (
		<Pane display={'flex'} flexDirection={'row'} justifyContent={'space-around'} paddingTop={30}>
			<DataCard bgColor={'#66D6D6'} />
			<DataCard bgColor={'#F9DADA'} />
			<DataCard bgColor={'#A5A9F1'} />
			<DataCard bgColor={'#A4CAFF'} />
		</Pane>
	)
}

export default DateCardList
