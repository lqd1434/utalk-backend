import * as React from 'react'
import styles from './index.module.scss'

interface PasswordInputProps {
	value: string | number
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value }) => {
	const [canSee, setCanSee] = React.useState(false)

	return (
		<input
			className={styles.input}
			type={canSee ? 'text' : 'password'}
			readOnly
			value={value}
			onClick={() => setCanSee(!canSee)}
		/>
	)
}

export default React.memo(PasswordInput)
