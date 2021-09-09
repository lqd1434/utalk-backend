import * as React from 'react'
import '../../mock/get'
import { Heading, Pane } from 'evergreen-ui'
import LineMap from './LineMap'
import { OnlineCard } from './OnlineCard'
import { DemoPie } from './PieChart'
import { LiquidChart } from './AddressDistribute'

const Statistics = () => {
	return (
		<Pane backgroundColor={'#F5F8FA'} paddingTop={0} marginTop={-20}>
			<Heading
				textAlign={'center'}
				color={'#005BEE'}
				size={900}
				paddingTop={20}
				marginTop={20}
				marginBottom={20}
			>
				统计数据
			</Heading>
			<Pane display={'flex'} flexDirection="row">
				<LineMap />
				<OnlineCard />
			</Pane>
			<Pane
				display={'flex'}
				flexDirection="row"
				marginTop={50}
				justifyContent={'space-around'}
				alignItems={'center'}
			>
				<DemoPie />
				<LiquidChart />
			</Pane>
		</Pane>
	)
}

export default Statistics
