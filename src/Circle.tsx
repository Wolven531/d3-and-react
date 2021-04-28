import { MutableRefObject, useEffect, useRef } from 'react'
import d3 from 'd3'

const Circle = () => {
	const ref: MutableRefObject<SVGSVGElement> = useRef<SVGSVGElement>() as MutableRefObject<SVGSVGElement>

	useEffect(() => {
		const svgElement = d3.select(ref.current)
		svgElement.append('circle')
			.attr('cx', 150)
			.attr('cy', 70)
			.attr('r', 50)
	}, [])

	return <svg ref={ref} />
}

export default Circle
