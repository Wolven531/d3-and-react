import { MutableRefObject, useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { generateDataset, useInterval } from './utils'

const AnimatedCircles = () => {
	const ref: MutableRefObject<SVGSVGElement> = useRef<MutableRefObject<SVGSVGElement>>() as unknown as MutableRefObject<SVGSVGElement>
	const ANIMATION_TIME_SECONDS = 1.2
	const generateCircles = () => {
		return generateDataset()
	}
	const [visibleCircles, setVisibleCircles] = useState(generateCircles())

	useInterval(() => {
		setVisibleCircles(generateCircles())
	}, 2000)

	useEffect(() => {
		const svgElement = d3.select(ref.current)
		const centerY = 10
		const radiusMax = 6
		const radiusStart = 0

		svgElement.selectAll('circle')
			.data(visibleCircles)
			.join(
				(enter) => enter.append('circle')
					.attr('cx', (d) => d[0] * 15 + 10)
					.attr('cy', centerY)
					.attr('r', radiusStart)
					.attr('fill', 'cornflowerblue')
					.call(
						(enter) => enter.transition()
							.duration(ANIMATION_TIME_SECONDS * 1000)
							.attr('cy', centerY)
							.attr('r', radiusMax)
							.style('opacity', 1)
					),
				(update) => update.attr('fill', 'lightgrey'),
				(exit) => exit.attr('fill', 'tomato')
					.call(
						(exit) => exit.transition()
							.duration(ANIMATION_TIME_SECONDS * 1000)
							.attr('r', radiusStart)
							.style('opacity', 0)
							.remove()
					)
			)
	}, [visibleCircles])

	return <svg viewBox="0 0 100 20" ref={ref} />
}

export default AnimatedCircles
