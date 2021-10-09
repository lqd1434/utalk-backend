import { makeAutoObservable } from 'mobx'

export class SideBarRoute {
	currentRoute: string = ''

	constructor() {
		makeAutoObservable(this)
	}

	setIndex(index: string) {
		this.currentRoute = index
	}
}

export const sideBarRoute = new SideBarRoute()
