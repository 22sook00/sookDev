import React, { createRef, FunctionComponent, useEffect } from "react";

const src = "https://utteranc.es/client.js";
const repo = "22sook00/sookDev"; // 자신 계정의 레포지토리로 설정
//const repo = "22sook00/sook-dev.vercel.app";

type UtterancesAttributesType = {
	src: string;
	repo: string;
	"issue-term": string;
	label: string;
	theme: string;
	crossorigin: string;
	async: string;
};

const CommentWidget: FunctionComponent = function () {
	const element = createRef<HTMLDivElement>();

	useEffect(() => {
		if (element.current === null) return;

		const utterances: HTMLScriptElement = document.createElement("script");

		const attributes: UtterancesAttributesType = {
			src,
			repo,
			"issue-term": "pathname",
			label: "Comment",
			theme: "dark-blue",
			crossorigin: "anonymous",
			async: "true",
		};

		Object.entries(attributes).forEach(([key, value]) => {
			utterances.setAttribute(key, value);
		});

		element.current.appendChild(utterances);
	}, []);

	return (
		<div ref={element} className="w-full h-fit m-auto px-5 lg:px-0 my-20" />
	);
};

export default CommentWidget;
