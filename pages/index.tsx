import { Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import { css } from "@emotion/react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Carosel = dynamic(() => import("@components/3dCarosel/carosel"));

const Home: NextPage = () => {
	return (
		<main
			css={css`
		height: 100%;
		`}>
			<Grid
				gridTemplateRows="min-content auto"
				h="calc(100vh - 4.3rem)"
				bg="background">
				<GridItem>
					<Center my="2rem">
						<Heading
							as="h1"
							color="white"
							fontSize={{ base: "5xl", md: "7xl" }}
							textAlign="center">
							👋 I’m Ryan
						</Heading>
					</Center>
					<Center my="5px">
						<Heading
							as="h2"
							color="white"
							fontSize={{ base: "3xl", md: "4xl" }}
							textAlign="center"
							css={css`font-variant: small-caps; letter-spacing: 2px;`}>
							a full stack developer
						</Heading>
					</Center>
					<Center my="5px">
						<Heading
							as="h3"
							color="white"
							fontSize={{ base: "3xl", md: "4xl" }}
							textAlign="center"
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
