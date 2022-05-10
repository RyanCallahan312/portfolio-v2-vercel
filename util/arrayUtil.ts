export function shuffle<T>(array: Array<T> | ReadonlyArray<T>): Array<T> {
	let currentIndex = array.length;
	let randomIndex: number;
	const shuffledArray = array.slice();

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
			shuffledArray[randomIndex],
			shuffledArray[currentIndex]
		];
	}

	return shuffledArray;
}
