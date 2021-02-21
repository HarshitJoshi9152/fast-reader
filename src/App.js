import React, { useState, useEffect } from "react";
import Reader from "./components/Reader";
import Header from "./components/Header";
import ParaFocused from "./components/ParaFocused";
import "./simple.css";

function App() {
	// useState, useEffect, useRef

	const [state, setState] = useState({
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quia, dolor mollitia dignissimos id atque velit, corporis suscipit vero illo voluptatibus inventore dolore? Ratione, veniam soluta non quis reprehenderit magni alias laudantium ipsa vel adipisci perferendis nesciunt corporis. Odit laborum dolorum ut temporibus iure maxime qui corrupti repellendus maiores sit.",
		timer: 1000,
		theme: "light",
		wordList: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quia, dolor mollitia dignissimos id atque velit, corporis suscipit vero illo voluptatibus inventore dolore? Ratione, veniam soluta non quis reprehenderit magni alias laudantium ipsa vel adipisci perferendis nesciunt corporis. Odit laborum dolorum ut temporibus iure maxime qui corrupti repellendus maiores sit."
			.trim()
			.split(" ")
	});

	const [content, setContent] = useState(
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quia, dolor mollitia dignissimos id atque velit, corporis suscipit vero illo voluptatibus inventore dolore? Ratione, veniam soluta non quis reprehenderit magni alias laudantium ipsa vel adipisci perferendis nesciunt corporis. ."
	);
	const [wordList, setList] = useState([content]);
	useEffect(() => {
		setList(content.trim().split(" "));
	}, [content]);
	const [timer, setTimer] = useState(state.timer);
	const counter = useCounter(0, timer);
	const currentWord = wordList[counter % wordList.length] || "finished";
	return (
		<div className="page">
			<Header />
			<Reader word={currentWord}></Reader>
			<label for="step">Step: </label>
			<input
				type="number"
				name="step"
				min="300"
				max="4000"
				step="10"
				onChange={(e) => setTimer(e.target.value)}
			></input>
			<ParaFocused />
			<textarea
				height="600"
				width="800"
				onChange={(e) => setContent(e.target.value)}
			></textarea>
		</div>
	);
}

function useCounter(start, interval) {
	const [val, setVal] = useState(start);

	useEffect(() => {
		const int = setInterval(() => {
			setVal((val) => val + 1);
		}, interval);
		return () => clearInterval(int);
	}, [interval]);

	return val;
}

export default App;

// ok so i think the speed gets  increased at live update when the component is remounted yess!!!
// so to fix this we need a cleanup function yes!!!
