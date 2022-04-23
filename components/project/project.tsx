import { Box, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type ProjectProps = {
	image: string;
	title: string;
	description: string;
	githubLink?: string;
	demoLink?: string;
	techStack?: string[];
	reverse?: boolean;
};

const Project: React.FC<ProjectProps> = ({
	image,
	title,
	description,
	githubLink,
	demoLink,
	techStack,
	reverse
}: ProjectProps) => {
	return (
		<Center h="60%" my="3rem">
			<Flex
				h="100%"
				width={["100%", "80%"]}
				align="center"
				justify="center"
				direction={reverse ? "row-reverse" : "row"}>
				<Box width="50%" h="80%" pos="relative">
					<Image src={image} layout="fill" alt="Project Tumbnail" />
				</Box>
				<Flex
					direction="column"
					width="40%"
					height="50%"
					mx="3rem"
					alignItems="start"
					justifyContent="center">
					<Heading color="white" as="h1">
						{title}
					</Heading>
					<Text color="white" fontStyle="italic">
						{techStack?.join(", ")}
					</Text>
					<Text color="white" py="10px">
						{description}
					</Text>

					<Text textColor="white">
						{githubLink && (
							<Link
								href={githubLink}
								isExternal
								fontStyle="italic"
								textColor="link">
								Github
							</Link>
						)}
						{demoLink && (
							<>
								{" "}
								-{" "}
								<Link
									href={demoLink}
									isExternal
									fontStyle="italic"
									textColor="link">
									Demo
								</Link>
							</>
						)}
					</Text>
				</Flex>
			</Flex>
		</Center>
	);
};

export default Project;
