import React, { useState, useRef } from "react";

export default function useSampler(content, config = { timer: 1000 }) {
	const [str, setstr] = useState([]);
	setstr(content.trim().split(" "));

	const wordIndex = useRef(0);
	setTimeout(() => wordIndex.current++, config.timer);

	return str[wordIndex];
}
