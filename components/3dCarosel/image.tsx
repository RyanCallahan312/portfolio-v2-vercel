import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

type Props = {
	imagePath: string;
	offset?: number;
	size?: Array<number>;
};

const ThreeImage: React.FC<Props> = ({
	imagePath,
	offset = 0,
	size = [1, 1]
}) => {
	const mesh = useRef<THREE.Mesh>(null);
	const texture = useLoader(TextureLoader, imagePath);
	const [animationState, setAnimationState] = React.useState<number>(0);

	useFrame((_, delta) => {
		setAnimationState(() => animationState + 0.002);
		mesh.current!.position!.x = Math.cos(animationState + offset) * 3.5;
		mesh.current!.position!.z = Math.sin(animationState + offset) * 3;
		mesh.current!.rotation!.x =
			Math.sin(animationState - 1 + offset) * 0.2 - 1;
		mesh.current!.rotation!.y = Math.cos(animationState + offset) * 0.2;
	});

	return (
		<>
			<mesh ref={mesh}>
				<planeBufferGeometry
					attach="geometry"
					args={[size[0], size[1]]}
				/>
				<meshBasicMaterial
					attach="material"
					map={texture}
					transparent
				/>
			</mesh>
		</>
	);
};

export default ThreeImage;
