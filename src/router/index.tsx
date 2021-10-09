import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AuthRoute from './AuthRoute'
import Loading from '../components/Loading'
import LimitRoute from './LimitRoute'

const Login = React.lazy(() => import('../pages/auth/login'))
const Medium = React.lazy(() => import('../Medium'))
const Home = React.lazy(() => import('../pages/home'))
const Statistics = React.lazy(() => import('../pages/statistics'))
const UserList = React.lazy(() => import('../pages/userList'))
const AdminManage = React.lazy(() => import('../pages/adminManage'))
const AppList = React.lazy(() => import('../pages/webApp/appList'))

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
				<LimitRoute path="/u/home" Component={Home} exact />
				<LimitRoute path="/u/statistics" Component={Statistics} exact />
				<LimitRoute path="/u/userList" Component={UserList} exact />
				<LimitRoute path="/u/adminManage" Component={AdminManage} exact />
				<LimitRoute path="/u/appList" Component={AppList} exact />
			</Switch>
		</Suspense>
	)
}

export interface RoutePropsType {
	path: string
	Component: React.LazyExoticComponent<(props: any) => JSX.Element>
	exact?: boolean
}
