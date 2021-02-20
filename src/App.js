import React, { useState, useEffect } from "react";
import Reader from "./components/Reader";
import Header from "./components/Header";
import ParaFocused from "./components/ParaFocused";
import useSampler from "./hooks/useSampler";

function App() {
	// useState, useEffect, useRef

	const [state, setState] = useState({
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quia, dolor mollitia dignissimos id atque velit, corporis suscipit vero illo voluptatibus inventore dolore? Ratione, veniam soluta non quis reprehenderit magni alias laudantium ipsa vel adipisci perferendis nesciunt corporis. Odit laborum dolorum ut temporibus iure maxime qui corrupti repellendus maiores sit.",
		timer: 1000,
		theme: "light",
		currentWord: "dorime",
		wordList: [],
		wordPointer: -1
	});

	// const tick = () => {
	// 	setState((state) => ({
	// 		...state,
	// 		wordPointer: state.wordPointer + 1
	// 	}));
	// };

	// useEffect(() => {
	// 	setInterval(() => {
	// 		console.log("timer updated !");
	// 		tick();
	// 	}, state.timer);
	// }, []);

	// idk why but passing the state and the wordPointer makes it work lol

	// function slideShow() {
	// 	setInterval(() => {
	// 		const list = state.content.trim().split(" ");
	// 		setState({
	// 			...state,
	// 			wordPointer: wordPointer + 1,
	// 			currentWord: list[wordPointer + 1]
	// 		});
	// 	}, timer);
	// }

	return (
		<>
			<Header />
			<Reader word={state.currentWord}></Reader>
			<ParaFocused />
		</>
	);
}

export default App;
