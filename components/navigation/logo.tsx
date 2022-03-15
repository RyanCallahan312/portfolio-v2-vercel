import { Box, BoxProps, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Logo: React.FC<BoxProps> = (props) => {
	return (
		<Box {...props}>
			<Link href="/">
				<a>
					<Image
						src="/DevRyanLogo.svg"
						alt="Dev Ryan Svg"
						htmlWidth="70px"
						loading="eager"
					/>
				</a>
			</Link>
		</Box>
	);
};

export default Logo;
