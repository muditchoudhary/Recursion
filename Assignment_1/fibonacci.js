function fib(n) {
	if (n === 0 || n === 1) {
		return [0];
	} else if (n === 2) {
		return [0, 1];
	} else {
		let first = 0;
		let second = 1;
		let ans = [first, second];

		for (let i = 2; i < n; i++) {
			let current = first + second;
			first = second;
			second = current;
			ans.push(current);
		}
		return ans;
	}
}

function fibRec(n) {
	if (n === 2) {
		return [0, 1];
	}

	return fibRec(n - 1).concat([fibRec(n - 1)[n - 2] + fibRec(n - 1)[n - 3]]);
}

fibRec(5);
