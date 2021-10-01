import ReactGA from 'react-ga'
import { createBrowserHistory, History, LocationState } from 'history'
import { useRef } from 'react'

const useGaListener = (gaCode: string) => {
	const customHistory = useRef<History<LocationState>>()

	customHistory.current = createBrowserHistory()
	ReactGA.initialize(gaCode)
	customHistory.current?.listen((location) => {
		ReactGA.set({ page: window.location.pathname })
		ReactGA.pageview(location.pathname + location.search)
		console.log(location)
	})

	return customHistory.current as History<LocationState>
}
export default useGaListener
