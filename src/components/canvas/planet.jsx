import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Planet = ({ isSmallScreen }) => {
  const planet = useGLTF("./planet_earth2/scene.gltf");

  return (
    <primitive
      object={planet.scene}
      scale={isSmallScreen ? 0.2 : 0.4}
      // scale={isSmallScreen ? 1.8 : 2.2}
      position-y={isSmallScreen ? -2 : -1.6}
      position-x={isSmallScreen ? -1.5 : -2.5}
      rotation-y={0}
    />
  );
};

const PlanetCanvas = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    // Set the initial value of the `isSmallScreen` state variable
    setIsSmallScreen(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-1, 6, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={10}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <Planet isSmallScreen={isSmallScreen} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PlanetCanvas;
