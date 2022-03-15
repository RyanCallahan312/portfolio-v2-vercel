import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import Logo from "./logo";
import MenuButton from "./menuButton";
import MenuItem from "./menuItem";

type NavBarProps = {
	children: React.ReactNode;
	props: any;
};

const NavBar = (props: any) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const onToggle = () => setIsOpen(!isOpen);

	return (
		<NavBarContainer {...props}>
			<Logo
				w="100px"
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

const NavBarContainer: React.FC<NavBarProps> = ({ children, props }) => (
	<Flex
		as="nav"
		align="center"
		justify="space-between"
		wrap="wrap"
		w="100%"
		h="7vh"
		bg="background"
		p={2}
		pr={5}
		color={["white", "white", "primary.700", "primary.700"]}
		{...props}>
		{children}
	</Flex>
);

const MenuLinks: React.FC<{ isOpen: boolean }> = ({ children, isOpen }) => {
	return (
		<Box
			display={{ base: isOpen ? "block" : "none", sm: "block" }}
			flexBasis={{ base: "100%", sm: "auto" }}>
			<Stack
				align="center"
				justify={["center", "space-around"]}
				direction={["column", "row"]}>
				{children}
			</Stack>
		</Box>
	);
};

export default NavBar;
