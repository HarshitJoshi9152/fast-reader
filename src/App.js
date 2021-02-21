import React, { useState, useEffect } from "react";
import Reader from "./components/Reader";
import Header from "./components/Header";
// import ParaFocused from "./components/ParaFocused";
import SettingsForm from "./components/SettingsForm";
import "./simple.css";

function App() {
	// useState, useEffect, useRef

	const [timer, setTimer] = useState(1000);
	const [content, setContent] = useState(
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quia, dolor mollitia dignissimos id atque velit, corporis suscipit vero illo voluptatibus inventore dolore? Ratione, veniam soluta non quis reprehenderit magni alias laudantium ipsa vel adipisci perferendis nesciunt corporis. ."
	);

	const [wordList, setList] = useState("");
	// change list on content change
	useEffect(() => {
		setList(content.trim().split(" "));
	}, [content]);

	const [counter, resetCounter] = useCounter(0, timer);
	console.log({
		counter,
		len: wordList.length,
		modulo: counter % wordList.length
	});
	const currentWord = wordList[counter % wordList.length] || "finished";

	return (
		<div className="page">
			<Header />
			<Reader word={currentWord}></Reader>
			<SettingsForm
				setContent={setContent}
				setTimer={setTimer}
				resetCounter={resetCounter}
			></SettingsForm>
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

	return [
		val,
		function resetCounter() {
			setVal(0);
		}
	];
}

export default App;

// ok so i think the speed gets  increased at live update when the component is remounted yess!!!
// so to fix this we need a cleanup function yes!!!
