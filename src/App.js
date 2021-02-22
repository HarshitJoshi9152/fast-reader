import React, { useState, useEffect } from "react";
import Reader from "./components/Reader";
import Header from "./components/Header";
// import ParaFocused from "./components/ParaFocused";
import SettingsForm from "./components/SettingsForm";
import useCounter from "./hooks/useCounter";
import Advertisement from "./components/Advertisement";

import "./main.css";

function App() {
	const [timer, setTimer] = useState(1000);
	const [content, setContent] = useState(
		"You see, when you start writing nested stuff, not only is this difficult to code, but it also becomes very inconvenient to maintain such a codebase. JSX thus helps you bring the cleanliness of HTML to the power of JavaScript."
	);

	const [wordList, setList] = useState("");
	const [counter, resetCounter] = useCounter(0, timer);

	// change list on content change
	useEffect(() => {
		setList(content.trim().split(" "));
	}, [content]);
	const currentWord = wordList[counter % wordList.length];

	return (
		<>
			<Header />
			<div className="page">
				<Reader word={currentWord}></Reader>
				<SettingsForm
					text={content}
					timer={timer}
					setContent={setContent}
					setTimer={setTimer}
					resetCounter={resetCounter}
				></SettingsForm>
				<Advertisement></Advertisement>
			</div>
		</>
	);
}

export default App;

// ok so i think the speed gets  increased at live update when the component is remounted yess!!!
// so to fix this we need a cleanup function yes!!!
