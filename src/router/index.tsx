import React, { Fragment, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AuthRoute from './AuthRoute'
import Loading from '../components/Loading'
import LimitRoute from './LimitRoute'
import { limitRouteList } from './routeConfig'

const Login = React.lazy(() => import('../pages/auth/login'))
const Medium = React.lazy(() => import('../Medium'))

export const FirstRouterAuth = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/login" component={Login} />
				<AuthRoute path="/u" Component={Medium} />
			</Switch>
		</Suspense>
	)
}

export const LimitRoutePages = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Switch>
				<Redirect exact from="/u" to="/u/home" />
				{limitRouteList.map(({ path, Component, exact }) => {
					return (
						<Fragment key={path}>
							<LimitRoute path={path} Component={Component} exact={exact} />
						</Fragment>
					)
				})}
			</Switch>
		</Suspense>
	)
}

export interface RoutePropsType {
	path: string
	Component: React.LazyExoticComponent<(props: any) => JSX.Element>
	exact?: boolean
}
