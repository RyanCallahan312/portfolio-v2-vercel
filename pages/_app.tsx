import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "@components/navigation/navmenu";
import Colors from "@themes/colors";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={Colors}>
			<NavBar />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
