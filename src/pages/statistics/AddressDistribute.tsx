import React, { useEffect, useState } from 'react'
import { Liquid, LiquidConfig, measureTextWidth } from '@ant-design/charts'

export const LiquidChart: React.FC = () => {
	const [percent, setPercent] = useState(0.26)
	const config: LiquidConfig = {
		percent,
		radius: 0.8,
		statistic: {
			title: {
				formatter: function formatter() {
					return '盈利率'
				},
				style: function style(_ref) {
					const percent = _ref.percent
					return { fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)' }
				},
			},
			content: {
				style: function style(_ref2): any {
					const percent = _ref2.percent
					return {
						fontSize: 60,
						lineHeight: 1,
						fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)',
					}
				},
				customHtml: function customHtml(container, view, _ref3) {
					const percent = _ref3!.percent
					const _container$getBoundin = container.getBoundingClientRect(),
						width = _container$getBoundin.width,
						height = _container$getBoundin.height
					const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2))
					const text = '占比 '.concat((percent * 100).toFixed(0), '%')
					const textWidth = measureTextWidth(text, { fontSize: 60 })
					const scale = Math.min(d / textWidth, 1)
					return '<div style="width:'
						.concat(String(d), 'px;display:flex;align-items:center;justify-content:center;font-size:')
						.concat(String(scale), 'em;line-height:')
						.concat(scale <= 1 ? '1' : 'inherit', '">')
						.concat(text, '</div>')
				},
			},
		},
		liquidStyle: function liquidStyle(_ref4) {
			const percent = _ref4.percent
			return {
				fill: percent > 0.45 ? '#5B8FF9' : '#FAAD14',
				stroke: percent > 0.45 ? '#5B8FF9' : '#FAAD14',
			}
		},
		color: function color() {
			return '#5B8FF9'
		},
	}
	useEffect(() => {
		let data = 0.25
		const interval = setInterval(function () {
			data += Math.min(Math.random() * 0.1, 0.1)
			if (data < 0.75) {
				setPercent(data)
			} else {
				clearInterval(interval)
			}
		}, 500)
	}, [])
	return <Liquid {...config} />
}
