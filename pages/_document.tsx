import { Html, Head, Main, NextScript } from "next/document";
import { css } from "@emotion/react";

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
