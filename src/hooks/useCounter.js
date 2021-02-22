import { useEffect, useState } from "react";

export default function useCounter(start, interval) {
	const [val, setVal] = useState(start);

	useEffect(() => {
		const int = setInterval(() => {
			setVal((val) => val + 1);
		}, interval);
		return () => clearInterval(int);
	}, [interval]);

	return [
		val,
		function resetCounter() {
			setVal(0);
		}
	];
}
