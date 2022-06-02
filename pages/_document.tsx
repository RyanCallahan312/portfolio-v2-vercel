import { css } from "@emotion/react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				{/* eslint-disable-next-line @next/next/no-title-in-document-head */}
				<meta
					name="description"
					content="Dev Ryan, a full stack developer. A showcase of skills and projects such as the highlight-inator."
				/>
				<meta name="og:title" content="Dev Ryan Portfolio" />
				<meta
					name="og:description"
					content="Dev Ryan, a full stack developer. A showcase of all significant works."
				/>
				<meta
					name="og:image"
					content="https://portfolio.devryan.io/DevRyanLogo.svg"
				/>
				<meta name="og:image:alt" content="Dev Ryan Logo" />
				<meta name="og:url" content="https://portfolio.devryan.io/" />
				<meta name="og:site_name" content="Dev Ryan Portfolio" />
				<meta name="og:locale" content="en_US" />

				<meta name="twitter:title" content="Dev Ryan Portfolio" />
				<meta
					name="twitter:description"
					content="Dev Ryan, a full stack developer. A showcase of all significant works."
				/>
				<meta
					name="twitter:image"
					content="https://portfolio.devryan.io/DevRyanLogo.svg"
				/>
				<meta name="twitter:card" content="summary_large_image" />

				<link rel="canonical" href="https://portfolio.devryan.io/" />
				<link rel="shortcut icon" href="/DevRyanLogo.svg" />
			</Head>
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
