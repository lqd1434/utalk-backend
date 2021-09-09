import React from 'react'
import { Pie, PieConfig } from '@ant-design/charts'

export const DemoPie: React.FC = () => {
	const data = [
		{
			type: '男',
			value: 55,
		},
		{
			type: '女',
			value: 30,
		},
		{
			type: '未指定',
			value: 15,
		},
	]
	const config: PieConfig = {
		appendPadding: 10,
		data: data,
		angleField: 'value',
		colorField: 'type',
		radius: 0.9,
		label: {
			type: 'inner',
			offset: '-30%',
			content: function content(_ref) {
				const percent = _ref.percent
				return ''.concat((percent * 100).toFixed(0), '%')
			},
			style: {
				fontSize: 14,
				textAlign: 'center',
			},
		},
		interactions: [{ type: 'element-active' }],
	}
	return <Pie {...config} />
}
