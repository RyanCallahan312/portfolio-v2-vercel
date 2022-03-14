import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ThreeImage from "./image";
import { Heading } from "@chakra-ui/react";
import { Html, useProgress } from "@react-three/drei";
import { css } from "@emotion/react";

const Carosel: React.FC = () => {
	return (
		<Canvas>
			<Suspense fallback={<Fallback />}>
				<ThreeImage />
			</Suspense>
		</Canvas>
	);
};

const Fallback: React.FC = () => {
	const { active, progress, errors, item, loaded, total } = useProgress();
	return (
		<Html center>
			<Heading
				as="h4"
				color="white"
				fontSize="4xl"
				css={css`font-variant: small-caps; letter-spacing: 2px;`}>
				Loading...{progress}%
			</Heading>
		</Html>
	);
};

export default Carosel;
