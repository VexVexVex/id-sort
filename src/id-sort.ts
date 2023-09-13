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

function msleep(n: number) {
	Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}

function sleep(n: number) {
	msleep(n*1000);
}
