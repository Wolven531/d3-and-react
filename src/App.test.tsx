import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
	const comp = render(<App />)
	expect(comp.getByText(/D3 and React/)).toBeInTheDocument()
	// const linkElement = screen.getByText(/learn react/i)
	// expect(linkElement).toBeInTheDocument()
})
