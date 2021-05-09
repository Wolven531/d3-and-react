import React from 'react'
import Circle from './Circle'
import Circles from './Circles'
import Svg from './Svg'
import './App.css'

function App() {
	return (
		<div>
			<header>
				<h3>D3 and React</h3>
			</header>
			<section>
				<Svg></Svg>
				<Circle></Circle>
				<Circles></Circles>
			</section>
		</div>
	)
}

export default App
