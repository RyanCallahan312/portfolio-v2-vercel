import { css } from "@emotion/react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head />
			<body
				css={css`
				overflow-y: scroll;
				height: 100vh;
				background-color: #252834;
			`}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
