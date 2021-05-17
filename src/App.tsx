import Button from '@material-ui/core/Button'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ReactDOM from 'react-dom'
import Circle from './Circle'
import Circles from './Circles'
import Svg from './Svg'
import './App.css'

function App() {
	const [currentDisplayIndex, setCurrentDisplayIndex] = useState(-1)

	return (
		<div>
			<header>
				<h3>D3 and React</h3>
			</header>
			<section>
				{currentDisplayIndex === 0 && <Svg></Svg>}
				{currentDisplayIndex === 1 && <Circle></Circle>}
				{currentDisplayIndex === 2 && <Circles></Circles>}
			</section>
			<section>
				<Button variant="contained">
					Show SVG
				</Button>
				<Button variant="contained" color="primary">
					Show Solo Circle
				</Button>
				<Button variant="contained" color="secondary">
					Show Circles
				</Button>
			</section>
		</div>
	)
}

export default App
