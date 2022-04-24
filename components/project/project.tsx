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
		<Center h="60%">
			<Flex
				h="100%"
				width={["100%", "80%"]}
				align="center"
				justify="center"
				direction={{
					base: "column",
					md: reverse ? "row-reverse" : "row"
				}}
				my="3rem">
				<Box width={{ base: "90%", md: "50%" }}>
					<Image
						src={image}
						layout="responsive"
						alt="Project Tumbnail"
						height="1000px"
						width="1400px"
					/>
				</Box>
				<Flex
					direction="column"
					width={{ base: "95%", md: "40%" }}
					height="50%"
					mx="3rem"
					alignItems={{ base: "center", md: "start" }}
					justifyContent="center">
					<Heading color="white" as="h1" fontSize={["2xl", "4xl"]}>
						{title}
					</Heading>
					<Text color="white" fontStyle="italic">
						{techStack?.join(", ")}
					</Text>
					<Text textAlign="justify" color="white" py="10px">
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
