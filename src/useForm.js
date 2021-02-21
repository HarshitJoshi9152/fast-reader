// custom hook for form !
// https://www.youtube.com/watch?v=9xhKH43llhU&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM&index=1

import { useState } from "react";

export const useForm = (initialValues, changeCallback = () => {}) => {
	const [values, setValues] = useState(initialValues);

	const onChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		});
		changeCallback();
	};

	const clearForm = () => {
		setValues(
			Object.fromEntries(Object.keys(values).map((prop) => [prop, ""]))
		);
	};

	return [values, onChange, clearForm];
};
