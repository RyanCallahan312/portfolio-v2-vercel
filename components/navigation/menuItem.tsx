import { Text, TextProps } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {
	isLast?: boolean;
	to?: string;
	textStyles?: TextProps;
};

const MenuItem: React.FC<Props> = ({
	children,
	isLast = false,
	to = "/",
	...rest
}) => {
	return (
		<Link href={to}>
			<a>
				<Text display="block" fontSize="x-large" px={8} {...rest}>
					{children}
				</Text>
			</a>
		</Link>
	);
};

export default MenuItem;
