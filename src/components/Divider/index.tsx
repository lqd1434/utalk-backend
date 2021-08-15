import * as React from 'react'
import { Pane } from 'evergreen-ui'
import { Property } from 'csstype'

interface PropTypes {
	color?: Property.BackgroundColor
	marginTop?: number
	marginBottom?: number
}

const Divider: React.FC<PropTypes> = ({ color, marginTop = 10, marginBottom = 10 }) => {
	return (
		<Pane
			height={1}
			marginTop={marginTop}
			marginBottom={marginBottom}
			width={'100%'}
			backgroundColor={color ?? '#CFD0CF'}
		/>
	)
}

export default Divider
