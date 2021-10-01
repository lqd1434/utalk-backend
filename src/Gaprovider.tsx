import React from 'react'
import { Router } from 'react-router-dom'
import useGaListener from './hooks/useGa'

const GaRouterProvider = ({ children }: any) => {
	const gaCode = '11111'
	return <Router history={useGaListener(gaCode)}>{children}</Router>
}

export default GaRouterProvider
