import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "@components/navigation/navmenu";
import "@fontsource/roboto";
import "@styles/document.css";
import Theme from "@themes/theme";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ChakraProvider theme={Theme}>
				<Grid templateRows="4.4rem auto" h="100%">
					<GridItem>
						<NavBar />
					</GridItem>
					<GridItem>
						<Component {...pageProps} />
					</GridItem>
				</Grid>
			</ChakraProvider>
		</>
	);
}

export default MyApp;
