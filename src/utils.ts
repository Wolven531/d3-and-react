export const generateDataset = () =>
	Array(10).fill(0)
		.map(() =>
			([
				Math.random() * 33 + 10, // x-coordinate
				Math.random() * 33 + 10, // y-coordinate
			])
		)
