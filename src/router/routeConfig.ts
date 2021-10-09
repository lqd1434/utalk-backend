import { RoutePropsType } from './index'
import React from 'react'

const Home = React.lazy(() => import('../pages/home'))
const Statistics = React.lazy(() => import('../pages/statistics'))
const UserList = React.lazy(() => import('../pages/userList'))
const AdminManage = React.lazy(() => import('../pages/adminManage'))
const AppList = React.lazy(() => import('../pages/webApp/appList'))

export const limitRouteList: RoutePropsType[] = [
	{
		path: '/u/home',
		Component: Home,
		exact: true,
	},
	{
		path: '/u/statistics',
		Component: Statistics,
		exact: true,
	},
	{
		path: '/u/userList',
		Component: UserList,
		exact: true,
	},
	{
		path: '/u/adminManage',
		Component: AdminManage,
		exact: true,
	},
	{
		path: '/u/appList',
		Component: AppList,
		exact: true,
	},
]
