import { useState } from 'react'
import { generateDataset, useInterval } from './utils'

const Circles = () => {
	const updateTimeSecs = 1000
	const [dataset, setDataset] = useState(generateDataset())

	useInterval(() => {
		const newDataset = generateDataset()

		console.debug(
			'newDataset =',
			newDataset,
		)

		setDataset(newDataset)
	}, updateTimeSecs)

	return (
		<svg viewBox="0 0 100 50">
			{
				dataset.map(([cx, cy], ind) =>
					<circle
						cx={cx}
						cy={cy}
						key={`circle-${ind}`}
						r="3"
					></circle>
				)
			}
		</svg>
	)
}

export default Circles
