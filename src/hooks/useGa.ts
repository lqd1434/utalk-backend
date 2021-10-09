import ReactGA from 'react-ga'
import { createBrowserHistory, History, LocationState } from 'history'
import { useEffect, useRef } from 'react'
import { emitter } from '../utils/EventEmiter'

const useGaListener = (gaCode: string) => {
	const customHistory = useRef<History<LocationState>>()

	customHistory.current = createBrowserHistory()
	console.log(customHistory.current?.location.pathname)
	useEffect(() => {
		//解决手动刷新造成的活跃路由样式与页面不匹配的问题
		if (customHistory.current?.location.pathname) {
			emitter.emit<string>('currentRoute', customHistory.current?.location.pathname)
		}
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
