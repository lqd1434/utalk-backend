import React from 'react'
import { Route } from 'react-router-dom'
import { RoutePropsType } from './index'

const LimitRoute: React.FC<RoutePropsType> = (props) => {
	//ζδΊζδ½
	const { path, Component, exact } = props
	return <Route path={path} exact={exact} render={(props) => <Component {...props} />} />
}

export default LimitRoute
