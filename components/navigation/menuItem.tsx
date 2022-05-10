import { Text, TextProps } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {
	to?: string;
	textStyles?: TextProps;
	external?: boolean;
	children: React.ReactNode;
};

const MenuItem: React.FC<Props> = ({
	children,
	to = "/",
	external = false,
	...rest
}) => {
	return (
		<Link href={to} passHref>
			<a>
				<Text
					display="block"
					fontSize="x-large"
					px={"calc(2vw - 2px)"}
					{...rest}>
					{children}
				</Text>
			</a>
		</Link>
	);
};

export default MenuItem;
