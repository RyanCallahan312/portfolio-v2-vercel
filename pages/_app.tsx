import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "@components/navigation/navmenu";
import Theme from "@themes/theme";
import "@fontsource/roboto";
import "@styles/document.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={Theme}>
			<NavBar />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
