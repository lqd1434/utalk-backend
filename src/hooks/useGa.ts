import ReactGA from 'react-ga'
import { createBrowserHistory, History, LocationState } from 'history'
import { useEffect, useRef } from 'react'
import { emitter } from '../utils/EventEmiter'

const useGaListener = (gaCode: string) => {
	const customHistory = useRef<History<LocationState>>()
	customHistory.current = createBrowserHistory()

	useEffect(() => {
		const pathname = customHistory.current?.location.pathname as string
		emitter.on<undefined>('sideBarMounted', () => {
			emitter.emit<string>('currentRoute', pathname)
		})
	}, [])

	ReactGA.initialize(gaCode)
	customHistory.current?.listen((location) => {
		ReactGA.set({ page: window.location.pathname })
		ReactGA.pageview(location.pathname + location.search)
		console.log(location)
		emitter.emit<string>('currentRoute', location.pathname)
	})

	return customHistory.current as History<LocationState>
}

export default useGaListener
