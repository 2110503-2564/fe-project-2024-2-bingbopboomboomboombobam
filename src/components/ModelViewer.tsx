"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei";
import CarModel from "@/components/CarModel";

export default function ModelViewer() {
  const [autoRotate, setAutoRotate] = useState(false);
  
  return (
    <div className="" style={{ height: "400px" }}>
      
      <Canvas 
        shadows 
        className="w-full h-full"
        dpr={[0.8, 1.5]} // Lower resolution to improve performance
        gl={{ 
          powerPreference: "default",
          antialias: false,
          stencil: false,
          depth: true,
          alpha: true
        }}
        frameloop="demand" // Only render when needed
      >
        
        {/* Camera */}
        <PerspectiveCamera 
          makeDefault 
          position={[4.25, 1.4, -4.5]} 
          fov={40}
          near={0.1}
          far={50} // Reduced far plane
        />
        <OrbitControls 
          enablePan={false}
          minDistance={1.5}
          maxDistance={9}
          maxPolarAngle={Math.PI/2}
          target={[0, 0.9, 0]}
          enableDamping={false} // Disable damping for performance
        />
        
        {/* Simplified Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow={false} />
        
        {/* Environment */}
        <Environment preset="sunset" background={false} />
        
        {/* Car Model */}
        <Suspense fallback={<LoadingPlaceholder />}>
          <CarModel 
            key="lamborghini_aventador_svj"
            autoRotate={autoRotate} 
            modelPath="lamborghini_aventador_svj"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Simple placeholder while loading
function LoadingPlaceholder() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#666666" />
    </mesh>
  );
}
