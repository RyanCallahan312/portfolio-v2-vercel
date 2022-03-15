import { Box } from "@chakra-ui/react";
import React from "react";
import { MdClose, MdMenu } from "react-icons/md";

type Props = {
	onToggle: () => void;
	isOpen: boolean;
};

const MenuButton: React.FC<Props> = ({ onToggle, isOpen }) => {
	return (
		<Box display={{ base: "block", sm: "none" }} onClick={onToggle}>
			{isOpen ? <MdClose /> : <MdMenu />}
		</Box>
	);
};

export default MenuButton;
