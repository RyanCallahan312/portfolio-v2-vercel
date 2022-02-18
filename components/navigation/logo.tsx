import React from "react";
import { Box, BoxProps, Image } from "@chakra-ui/react";
import Link from "next/link";

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
