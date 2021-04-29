import React from 'react'
import Circle from './Circle'
import Circles from './Circles'
import Svg from './Svg'
import './App.css'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Svg></Svg>
				<Circle></Circle>
				<Circles></Circles>
			</header>
		</div>
	)
}

export default App
