import React from 'react'
import ReactDOM from 'react-dom'
import './global.scss'
import App from './App'
import GaRouterProvider from './Gaprovider'

ReactDOM.render(
	<GaRouterProvider>
		<App />
	</GaRouterProvider>,
	document.getElementById('root'),
)
