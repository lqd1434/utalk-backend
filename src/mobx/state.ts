import { makeAutoObservable } from 'mobx'
import { limitRouteList } from '../router/routeConfig'

export class SideBarRoute {
	currentRoute: string = '/u/home'

	constructor() {
		makeAutoObservable(this)
	}

	setRoute(route: string) {
		const routes = limitRouteList.map((item) => {
			return item.path
		})
		if (routes.includes(route)) {
			this.currentRoute = route
		}
	}
}

export const sideBarRoute = new SideBarRoute()
