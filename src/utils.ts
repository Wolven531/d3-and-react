import { useEffect, useRef } from 'react'

export const generateDataset = () =>
	Array(10).fill(0)
		.map(() =>
			([
				Math.random() * 33 + 10, // x-coordinate
				Math.random() * 33 + 10, // y-coordinate
			])
		)

// inspired by https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export function useInterval(callback: Function, delay: number) {
	const savedCallback = useRef<any>()

	// remember the latest callback
	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	// set up the interval
	useEffect(() => {
		function tick() {
			savedCallback.current()
		}
		if (delay !== null) {
			let id = setInterval(tick, delay)
			return () => clearInterval(id)
		}
	}, [delay])
}
