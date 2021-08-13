import React from 'react'
import { Route } from 'react-router-dom'
import { PropsType } from './index'

const LimitRoute: React.FC<PropsType> = (props) => {
	//某些操作
	console.log('11')
	const { path, Component, exact } = props
	return <Route path={path} exact={exact} render={(props) => <Component {...props} />} />
}

export default LimitRoute
