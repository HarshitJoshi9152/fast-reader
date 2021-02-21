import React from "react";
import { useForm } from "./../useForm";
import "./SettingsForm.css";

export default function SettingsForm({ setTimer, setContent, resetCounter }) {
	const [state, onChange, clearForm] = useForm({
		step: 1000,
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quia, dolor mollitia dignissimos id atque velit, corporis suscipit vero illo voluptatibus inventore dolore? Ratione, veniam soluta non quis reprehenderit magni alias laudantium ipsa vel adipisci perferendis nesciunt corporis."
	});

	const { step, content } = state;

	const submit = function (e) {
		e.preventDefault();
		const { step, content } = state;
		console.log({ step, content });
		setTimer(Number(step));
		setContent(content);
		resetCounter();
	};

	return (
		<form>
			<input
				type="number"
				name="step"
				id="step"
				min="300"
				max="4000"
				step="10"
				onChange={onChange}
				value={step}
			></input>

			<textarea
				name="content"
				id="content"
				rows="10"
				cols="50"
				onChange={onChange}
				value={content}
			></textarea>
			<button onClick={submit}>Submit</button>
		</form>
	);
}
// left pos
