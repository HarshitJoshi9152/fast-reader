import React from "react";
import { useForm } from "./../useForm";
import "./SettingsForm.css";

export default function SettingsForm({
	timer,
	text,
	setTimer,
	setContent,
	resetCounter
}) {
	const [state, onChange, clearForm] = useForm({
		step: timer,
		content: text
	});

	const { step, content } = state;

	const submit = function (e) {
		e.preventDefault();
		const { step, content } = state;
		if (content == null) return null;
		setTimer(Number(step));
		setContent(content);
		resetCounter();
	};

	return (
		<div className="sidebar-1">
			<input
				type="range"
				name="step"
				id="step"
				min="300"
				max="4000"
				step="10"
				onChange={onChange}
				value={step}
			></input>
			<p>{step}</p>
			<textarea
				name="content"
				id="content"
				// rows="10"
				// cols="50"
				onChange={onChange}
				value={content}
			></textarea>
			<button onClick={submit}>Submit</button>
		</div>
	);
}
// left pos
