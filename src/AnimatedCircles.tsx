import { MutableRefObject, useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { generateDataset, useInterval } from './utils'

const AnimatedCircles = () => {
	const ref: MutableRefObject<SVGSVGElement> = useRef<MutableRefObject<SVGSVGElement>>() as unknown as MutableRefObject<SVGSVGElement>
	const ANIMATION_TIME_SECONDS = 1.2
	const ANIMATION_TIME_MILLIS = ANIMATION_TIME_SECONDS * 1000
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
		const D3_FILL = 'fill'

		svgElement.selectAll('circle')
			.data(visibleCircles)
			.join(
				(enter) => enter.append('circle')
					.attr('cx', (d) => d[0] * 15 + 10)
					.attr('cy', centerY)
					.attr('r', radiusStart)
					.attr(D3_FILL, 'cornflowerblue')
					.call(
						(enter) => enter.transition()
							.duration(ANIMATION_TIME_MILLIS)
							.attr('cy', centerY)
							.attr('r', radiusMax)
							.style('opacity', 1)
					),
				(update) => update.attr(D3_FILL, 'lightgrey'),
				(exit) => exit.attr(D3_FILL, 'tomato')
					.call(
						(exit) => exit.transition()
							.duration(ANIMATION_TIME_MILLIS)
							.attr('r', radiusStart)
							.style('opacity', 0)
							.remove()
					)
			)
	}, [ visibleCircles, ANIMATION_TIME_MILLIS, ])

	return <svg viewBox="0 0 100 20" ref={ref} />
}

export default AnimatedCircles
