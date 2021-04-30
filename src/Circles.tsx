import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { generateDataset, useInterval } from './utils'
import * as d3 from 'd3'

const Circles = () => {
	const ref: MutableRefObject<SVGSVGElement> = useRef<SVGSVGElement>() as MutableRefObject<SVGSVGElement>
	const updateTimeSecs = 1000
	const [dataset, setDataset] = useState(generateDataset())

	useEffect(() => {
		const svgElement = d3.select(ref.current)
		svgElement.selectAll('circle')
			.data(dataset)
			.join('circle')
			.attr('cx', (d) => d[0])
			.attr('cy', (d) => d[1])
			.attr('r', 3)
	}, [dataset])

	useInterval(() => {
		const newDataset = generateDataset()

		console.debug(
			'newDataset =',
			newDataset,
		)

		setDataset(newDataset)
	}, updateTimeSecs)

	return <svg viewBox="0 0 100 50" ref={ref} />
}

export default Circles
