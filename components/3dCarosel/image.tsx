import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

const ThreeImage: React.FC = () => {
	const mesh = useRef<THREE.Mesh>(null);
	const texture = useLoader(TextureLoader, "dotnet-logo-optimised.png");

	useFrame(
		() => (mesh.current!.rotation!.x = mesh.current!.rotation!.y += 0.01)
	);

	return (
		<>
			<mesh ref={mesh}>
				<planeBufferGeometry attach="geometry" args={[3, 3]} />
				<meshBasicMaterial attach="material" map={texture} />
			</mesh>
		</>
	);
};

export default ThreeImage;
