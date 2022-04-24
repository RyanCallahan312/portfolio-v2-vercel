import {
	Box,
	Center,
	Flex,
	Heading,
	HStack,
	Link,
	Spacer,
	Text
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type FeatureProjectProps = {
	image: string;
	title: string;
	description: string;
	githubLink?: string;
	demoLink?: string;
	techStack?: string[];
};

const FeatureProject: React.FC<FeatureProjectProps> = ({
	image,
	title,
	description,
	githubLink,
	demoLink,
	techStack
}: FeatureProjectProps) => {
	return (
		<Center h="80%" mb="4rem">
			<Flex
				h="100%"
				width={["100%", "80%", "80%", "60%", "60%", "50%"]}
				align="flex-start"
				justify="center"
				direction="column">
				<Spacer />
				<Center width="100%">
					<Box width="80%">
						<Image
							src={image}
							layout="responsive"
							alt="Project Tumbnail"
							height="1000px"
							width="1000px"
						/>
					</Box>
				</Center>
				<Spacer />
				<HStack width="100%" justify="space-between" align="baseline">
					<Heading color="white" as="h1">
						{title}
					</Heading>
					<Text color="white" fontStyle="italic">
						{techStack?.join(", ")}
					</Text>
				</HStack>
				<Text color="white" py="5px">
					{description}
				</Text>

				<span color="white">
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
				</span>
			</Flex>
		</Center>
	);
};

export default FeatureProject;
