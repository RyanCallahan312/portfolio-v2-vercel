import { css } from "@emotion/react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head />
			<body
				css={css`
				overflow-y: scroll;
			`}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
