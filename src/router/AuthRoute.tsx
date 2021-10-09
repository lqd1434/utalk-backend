import React from 'react'
import { RoutePropsType } from './index'
import { Redirect, Route } from 'react-router-dom'

const AuthRoute: React.FC<RoutePropsType> = (props) => {
	const checkAuth = !!localStorage.getItem('login')
	const { path, Component, exact } = props
	return (
		<Route
			path={path}
			exact={exact}
			render={(props) => (checkAuth ? <Component {...props} /> : <Redirect to={'/login'} />)}
		/>
	)
}

export default AuthRoute
