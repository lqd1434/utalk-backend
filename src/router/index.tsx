import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AuthRoute from './AuthRoute'
import Loading from '../components/Loading'
import LimitRoute from './LimitRoute'

const Login = React.lazy(() => import('../pages/auth/login'))
const Medium = React.lazy(() => import('../Medium'))
const Home = React.lazy(() => import('../pages/home'))

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
	console.log('li')
	return (
		<Suspense fallback={<Loading />}>
			<Switch>
				<Redirect exact from="/u" to="/u/home" />
				<LimitRoute path="/u/home" Component={Home} exact />
			</Switch>
		</Suspense>
	)
}

export interface PropsType {
	path: string
	Component: React.LazyExoticComponent<(props: any) => JSX.Element>
	exact?: boolean
}
