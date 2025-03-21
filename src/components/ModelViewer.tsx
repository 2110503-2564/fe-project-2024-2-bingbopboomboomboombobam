"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei";
import CarModel from "@/components/CarModel";
import { CarModelType } from "@/data/carModels";

interface ModelViewerProps {
  modelPath: string;
}

export default function ModelViewer({ modelPath }: ModelViewerProps) {
  const [autoRotate, setAutoRotate] = useState(true);
  
  return (
    <div className="w-[70vw] h-full bg-[#1D1E1F]" style={{ height: "100vh" }}>
      <div className="absolute top-24 right-4 z-20">
        <button 
          onClick={() => setAutoRotate(!autoRotate)}
          className="py-2 px-4 bg-black text-white rounded-md opacity-70 hover:opacity-100 transition font-mono"
        >
          {autoRotate ? "Stop Rotation" : "Start Rotation"}
        </button>
      </div>
      
      <Canvas shadows className="w-full h-full">
        <color attach="background" args={["#1D1E1F"]} />
        
        {/* Camera */}
        <PerspectiveCamera 
          makeDefault 
          position={[4.25, 1.4, -4.5]} 
          fov={40}
          near={0.1}
          far={100}
        />
        <OrbitControls 
          enablePan={false}
          minDistance={1.5}
          maxDistance={9}
          maxPolarAngle={Math.PI/2}
          target={[0, 0.9, 0]} // Adjusted target Y position by +0.4
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-5, 5, 5]} intensity={0.5} />
        <directionalLight position={[0, 5, -5]} intensity={0.7} />
        
        {/* Environment */}
        <Environment preset="sunset" />
        
        {/* Car Model */}
        <Suspense fallback={<LoadingPlaceholder />}>
          <CarModel 
            key={modelPath}
            autoRotate={autoRotate} 
            modelPath={modelPath as CarModelType}
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
