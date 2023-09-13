export function idSort<Type>(array: Array<Type>): Array<Type> {
	while (!isSorted(array)) {
		// Wait for God to sort it for you
		sleep(1000);
	}
	return array;
}

function isSorted<Type>(array: Array<Type>): boolean {
	let sorted = true;
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] > array[i+1]) {
			sorted = false;
			break;
		}
	}
	return sorted;
}

const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))
