import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'
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
	const CustomStyledButton = styled(Button)({
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		// border: 0,
		// borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		margin: '10px',
		// height: 48,
		// padding: '0 30px',
	})

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
				<CustomStyledButton variant="contained" onClick={() => { setCurrentDisplayIndex(0) }}>
					Show SVG
				</CustomStyledButton>
				<CustomStyledButton variant="contained" color="primary" onClick={() => { setCurrentDisplayIndex(1) }}>
					Show Solo Circle
				</CustomStyledButton>
				<CustomStyledButton variant="contained" color="secondary" onClick={() => { setCurrentDisplayIndex(2) }}>
					Show Circles
				</CustomStyledButton>
			</section>
		</div>
	)
}

export default App
