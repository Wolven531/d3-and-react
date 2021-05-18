import React from 'react'
import { render, RenderResult, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
	let comp: RenderResult

	beforeEach(() => {
		comp = render(<App />)
	})

	it('renders header properly', () => {
		// expect(comp.getByText(/D3 and React/)).toBeInTheDocument()
		// expect(screen.getByText(/D3 and React/)).toBeInTheDocument()

		const headerResult = comp.container.querySelectorAll('header')
		expect(headerResult).toHaveLength(1)
		expect(headerResult[0].textContent).toBe('D3 and React')
	})
})
