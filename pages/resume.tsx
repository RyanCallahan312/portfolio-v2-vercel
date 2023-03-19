import { Box, Center } from "@chakra-ui/react";
import { css } from "@emotion/react";
import type { NextPage } from "next";

const Resume: NextPage = () => {
	return (
		<main
			css={css`
		height:100%
		`}>
			<Center h="100%" pt="8px" bg="background">
				<Box w={{ base: "100%", sm: "80%", lg: "60%" }} h="100%">
					<iframe
						css={css`
									width: 100%;
									height: 95%;
								`}
						src="https://drive.google.com/file/d/1Ji0Jx58o1xqufweGqFM6Kvwytp3LNbFH/preview"
						allow="autoplay"
					/>
				</Box>
			</Center>
		</main>
	);
};

export default Resume;
