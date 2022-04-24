import { Heading } from "@chakra-ui/react";
import { CAROSEL_IMAGES } from "@constants/constants";
import { css } from "@emotion/react";
import { Html, useProgress } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { getOffset } from "@util/trig";
import React, { Suspense } from "react";
import ThreeImage from "./image";

type Children = {
	children?: React.ReactNode;
};

const CanvasComponents: React.FC<Children> = ({ children }) => {
	useThree(({ camera }) => {
		camera.rotation.set(-0.7, 0, 0);
		camera.position.set(0, 3, 5);
	});
	return <>{children}</>;
};

const Carosel: React.FC = () => {
	const images = CAROSEL_IMAGES.map((image, index) => (
		<ThreeImage
			key={image + index}
			imagePath={image}
			offset={getOffset(index, CAROSEL_IMAGES.length)}
			size={[2, 2]}
		/>
	));
	return (
		<Canvas>
			<CanvasComponents>
				<Suspense fallback={<Fallback />}>
					<pointLight args={[`white`, 1, 100]} position={[0, 3, 5]} />
					{images}
				</Suspense>
			</CanvasComponents>
		</Canvas>
	);
};

const Fallback: React.FC = () => {
	const { progress } = useProgress();
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
