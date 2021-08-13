import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'
import Background from '../../../components/Background'
import clsx from 'clsx'
import { Button, TextInput, Pane } from 'evergreen-ui'

const Login = () => {
	const history = useHistory()
	const [usr, setUsr] = useState('')
	const [pwd, setPwd] = useState('')

	useLayoutEffect(() => {
		const checkAuth = !!localStorage.getItem('login')
		if (checkAuth) {
			history.push('/u')
		}
	}, [])

	const login = () => {
		localStorage.setItem('login', 'true')
		history.push('/u')
	}

	return (
		<>
			<Background />
			<div className={styles.cardBox}>
				<h1 className={styles.title}>Utalk</h1>
				<h5 className={styles.subtitle}>管理后台</h5>
				<div className={styles.inputCon}>
					<label>账号:</label>
					<TextInput
						value={usr}
						onChange={(e: any) => {
							setUsr(e.target.value)
						}}
						width={'85%'}
						name="username"
						borderRadius={6}
						placeholder="请输入账号"
						marginLeft={10}
						marginTop={30}
						size={'large'}
					/>
				</div>
				<div className={clsx([styles.inputCon])}>
					<label>密码:</label>
					<TextInput
						value={pwd}
						onChange={(e: any) => {
							setPwd(e.target.value)
						}}
						width={'85%'}
						name="password"
						placeholder="请输入密码"
						borderRadius={6}
						marginLeft={10}
						marginTop={10}
						size={'large'}
					/>
				</div>
				<Pane marginLeft={60} marginRight={70} marginTop={40}>
					<Button width={'40%'} height={40} marginRight={20} marginLeft={50} borderRadius={6}>
						反馈
					</Button>
					<Button width={'40%'} height={40} borderRadius={6} onClick={login}>
						登录
					</Button>
				</Pane>
			</div>
		</>
	)
}

export default Login
