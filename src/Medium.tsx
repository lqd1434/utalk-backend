import React from 'react'
import { Pane } from 'evergreen-ui'
import { LimitRoutePages } from './router'
import SideBar from './components/SideBar'
import Header from './components/Header'

function Medium() {
	return (
		<>
			<Pane marginLeft={245} width={screen.availWidth - 270} marginTop={71} overflowX={'hidden'}>
				<LimitRoutePages />
			</Pane>
			<SideBar />
			<Header />
		</>
	)
}

export default Medium
