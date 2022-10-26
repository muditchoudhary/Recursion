function mergeSort(arr) {
	if (arr.length === 1) return arr;

	if (arr.length > 2) {
		let mid = (0 + (arr.length - 1)) / 2;
		let a1 = mergeSort(arr.slice(0, mid));
		let a2 = mergeSort(arr.slice(mid, arr.length));

		let i = 0;
		let j = 0;
		let k = 0;
		while (i < a1.length && j < a2.length) {
			if (a1[i] < a2[j]) {
				arr[k] = a1[i];
				k++;
				i++;
			} else {
				arr[k] = a2[j];
				k++;
				j++;
			}
		}

		while (i < a1.length) {
			arr[k] = a1[i];
			k++;
			i++;
		}

		while (j < a2.length) {
			arr[k] = a2[j];
			k++;
			j++;
		}

		return arr;
	} else {
		if (arr[0] > arr[1]) {
			let temp = arr[0];
			arr[0] = arr[1];
			arr[1] = temp;
			return arr;
		} else {
			return arr;
		}
	}
}
