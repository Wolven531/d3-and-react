import Box from '@material-ui/core/Box'
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
		// background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		// border: 0,
		// borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		margin: '10px',
		// height: 48,
		// padding: '0 30px',
	})

	return (
		<Box display="flex" flexDirection="column">
			<Box className="header"
				fontWeight="fontWeightBold"
				mx="auto"
				my="1rem"
				textAlign="center"
			>
				D3 and React
			</Box>
			<Box className="content"
				display="flex"
				flexGrow={1}
				mx="auto"
				my="1rem"
			>
				{currentDisplayIndex === 0 && <Svg></Svg>}
				{currentDisplayIndex === 1 && <Circle></Circle>}
				{currentDisplayIndex === 2 && <Circles></Circles>}
			</Box>
			<Box className="controls">
				<CustomStyledButton variant="contained" onClick={() => { setCurrentDisplayIndex(0) }}>
					Show SVG
				</CustomStyledButton>
				<CustomStyledButton variant="contained" color="primary" onClick={() => { setCurrentDisplayIndex(1) }}>
					Show Solo Circle
				</CustomStyledButton>
				<CustomStyledButton variant="contained" color="secondary" onClick={() => { setCurrentDisplayIndex(2) }}>
					Show Circles
				</CustomStyledButton>
			</Box>
		</Box>
	)
}

export default App
