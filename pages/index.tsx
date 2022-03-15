import {
	Center,
	Grid,
	GridItem,
	Heading,
	useMediaQuery
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Carosel = dynamic(() => import("@components/3dCarosel/carosel"));

const Home: NextPage = () => {
	const isSmallScreen = useMediaQuery("(min-width: 1280)");

	return (
		<main
			css={css`
		height: 100%;
		`}>
			<Grid gridTemplateRows="min-content auto" h="93vh" bg="background">
				<GridItem>
					<Center my="2rem">
						<Heading as="h1" color="white" fontSize="7xl">
							👋 I’m Ryan
						</Heading>
					</Center>
					<Center my="5px">
						<Heading
							as="h2"
							color="white"
							fontSize="4xl"
							css={css`font-variant: small-caps; letter-spacing: 2px;`}>
							a full stack web developer
						</Heading>
					</Center>
					<Center my="5px">
						<Heading
							as="h3"
							color="white"
							fontSize="4xl"
							css={css`font-variant: small-caps; letter-spacing: 2px;`}>
							with a passion for computer vision
						</Heading>
					</Center>
				</GridItem>
				<GridItem w="100%" h="100%">
					<Carosel />
				</GridItem>
			</Grid>
		</main>
	);
};

export default Home;
