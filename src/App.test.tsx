import React from 'react'
import { render, RenderResult, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
	let comp: RenderResult

	beforeEach(() => {
		comp = render(<App />)
	})

	it('renders header properly', () => {
		// approach 1 - DOM API (dev-centric testing, verifies function of comp)
		const headerResult = comp.container.querySelectorAll('header')
		expect(headerResult).toHaveLength(1)
		expect(headerResult[0].textContent).toBe('D3 and React')

		// approach 2 - screen API (user-centric testing, verifies form of comp)
		expect(screen.getByText(/D3 and React/)).toBeInTheDocument()
	})
})
