import { Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { css } from "@emotion/react";
import type { NextPage } from "next";
import Link from "next/link";

const Contact: NextPage = () => {
	return (
		<main
			css={css`
		flex-grow: 1;
		height:100%
		`}>
			<Flex
				as="nav"
				align="center"
				justify="space-between"
				direction="column">
				<Image
					src="/avatar.png"
					alt="Dev Ryan Avatar"
					loading="eager"
				/>
				<Heading as="h1" color="white" fontSize="4xl" mb="20px">
					Say Hello 🙌
				</Heading>
				<Stack
					direction={["column", "row"]}
					w="100%"
					spacing="10%"
					align="center"
					justify="center">
					<Link href="https://github.com/RyanCallahan312">
						<a>
							<Image
								src="/github-mark-white.svg"
								alt="Github Logo"
								loading="eager"
								width="100px"
							/>
						</a>
					</Link>
					<Link href="mailto:Ryan@DevRyan.io">
						<a>
							<Image
								src="/gmail.svg"
								alt="Gmail Logo"
								loading="eager"
								width="100px"
							/>
						</a>
					</Link>
					<Link href="https://www.linkedin.com/in/ryancallahan312/">
						<a>
							<Image
								src="/linkedin.png"
								alt="Linkedin Logo"
								loading="eager"
								width="100px"
							/>
						</a>
					</Link>
				</Stack>
			</Flex>
		</main>
	);
};

export default Contact;
