import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "@components/navigation/navmenu";
import "@fontsource/roboto";
import "@styles/document.css";
import Theme from "@themes/theme";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={Theme}>
			<NavBar />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
