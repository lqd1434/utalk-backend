import * as React from 'react'
import { Pane } from 'evergreen-ui'
import styles from './index.module.scss'

interface PasswordInputProps {
	value: string | number
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value }) => {
	const [canSee, setCanSee] = React.useState(false)

	return (
		<Pane display={'flex'} alignItems={'center'} justifyContent={'center'}>
			<Pane
				onClick={() => setCanSee(!canSee)}
				className={styles.password}
				paddingTop={canSee ? 0 : 6}
				paddingRight={10}
			>
				{canSee ? value.toString() : value.toString().replaceAll(/[1-9a-zA-Z.]/g, '*')}
			</Pane>
			{/*{canSee ? (*/}
			{/*	<EyeOpenIcon onClick={() => setCanSee(!canSee)} cursor={'pointer'} />*/}
			{/*) : (*/}
			{/*	<EyeOffIcon onClick={() => setCanSee(!canSee)} cursor={'pointer'} />*/}
			{/*)}*/}
		</Pane>
	)
}

export default React.memo(PasswordInput)
