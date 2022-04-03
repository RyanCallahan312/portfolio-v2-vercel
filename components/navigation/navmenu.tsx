import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import Logo from "./logo";
import MenuButton from "./menuButton";
import MenuItem from "./menuItem";

type MenuLinksProps = {
	isOpen: boolean;
};

const NavBar = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	const onToggle = () => setIsOpen(!isOpen);

	return (
		<NavBarContainer>
			<Logo
				w="70px"
				color={["white", "white", "primary.500", "primary.500"]}
			/>
			<MenuButton onToggle={onToggle} isOpen={isOpen} />
			<MenuLinks isOpen={isOpen}>
				<MenuItem to="/blog">Blog</MenuItem>
				<MenuItem to="/resume">Resume</MenuItem>
				<MenuItem to="/projects">Projects</MenuItem>
				<MenuItem to="/contact" isLast>
					Contact
				</MenuItem>
			</MenuLinks>
		</NavBarContainer>
	);
};

const NavBarContainer: React.FC = ({ children }) => (
	<Flex
		as="nav"
		align="center"
		justify="space-between"
		wrap="wrap"
		w="100%"
		h="4.4rem"
		bg="background"
		p={2}
		pr={5}
		color={["white", "white", "primary.700", "primary.700"]}>
		{children}
	</Flex>
);

const MenuLinks: React.FC<MenuLinksProps> = ({ children, isOpen }) => {
	return (
		<>
			<Box
				display={{ base: isOpen ? "block" : "none", sm: "none" }}
				flexBasis="auto"
				bg="background"
				position="absolute"
				left="0px"
				top="4.4rem"
				w="100%"
				height="auto"
				zIndex={1}
				opacity="75%">
				<Stack
					align="center"
					justify="space-around"
					direction="column"
					height="50%"
					opacity="100%">
					{children}
				</Stack>
			</Box>
			<Box
				display={{ base: "none", sm: "block" }}
				flexBasis="auto"
				bg="background">
				<Stack align="center" justify="space-around" direction="row">
					{children}
				</Stack>
			</Box>
		</>
	);
};

export default NavBar;
