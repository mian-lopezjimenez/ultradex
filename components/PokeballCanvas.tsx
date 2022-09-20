import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Pokeball } from "./Pokeball";
import { OrbitControls } from "@react-three/drei";

const PokeballCanvas = () => {
  return (
    <Canvas>
      <OrbitControls
        enableZoom={false}
        autoRotate
        rotateSpeed={2}
        autoRotateSpeed={3}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
        <Pokeball />
      </Suspense>
    </Canvas>
  );
};

export default PokeballCanvas;
