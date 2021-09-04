import * as React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Heading, Pane } from 'evergreen-ui'
import { Line } from '@ant-design/charts'

type LineMapType = {
	week: number
	value: number
}

const LineMap = () => {
	const [lineMapData, setLineMapData] = useState<LineMapType[]>([])
	useEffect(() => {
		fetchLineMapData()
	}, [])

	const fetchLineMapData = async () => {
		const lineMap = await axios.get('/api/lineMapData', { responseType: 'json' })
		setLineMapData(lineMap.data.lineMapData)
	}

	const renderLine = (lineMapData: LineMapType[]): React.ReactNode => {
		const config = {
			data: lineMapData,
			xField: 'week',
			yField: 'value',
			smooth: true,
			point: {
				size: 4,
				shape: 'diamond',
				style: {
					fill: 'white',
					stroke: '#5B8FF9',
					lineWidth: 2,
				},
			},
			tooltip: { showMarkers: false },
			state: {
				active: {
					style: {
						shadowBlur: 4,
						stroke: '#000',
						fill: 'red',
					},
				},
			},
			interactions: [{ type: 'marker-active' }],
		}
		return (
			<Pane>
				<Heading textAlign={'center'} size={800} width={500} marginTop={50} marginBottom={20}>
					周活跃
				</Heading>
				<Pane width={600}>
					<Line {...config} />
				</Pane>
			</Pane>
		)
	}

	return <>{renderLine(lineMapData)}</>
}

export default LineMap
