"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";
import { CarModelType } from "@/data/carModels";

interface CarModelProps {
  modelPath: CarModelType;
  autoRotate: boolean;
}

// Static lookup to prevent recreating on each render
const MODEL_URLS = {
  "lamborghini_aventador_svj": "/lamborghini_aventador_svj/scene.gltf"
};

// Preload all models once at app initialization
if (typeof window !== 'undefined') {
  Object.values(MODEL_URLS).forEach(url => {
    useGLTF.preload(url);
  });
}

// Create a global cache for models to prevent reloading
const modelCache = {};

export default function CarModel({ modelPath, autoRotate }: CarModelProps) {
  const group = useRef<Group>(null);
  
  // Simplified rotation logic
  useFrame((_, delta) => {
    if (group.current && autoRotate) {
      group.current.rotation.y += delta * 0.5;
    }
  });

  // Get model URL from static map to avoid recalculations
  const modelUrl = MODEL_URLS[modelPath] || MODEL_URLS.lamborghini_aventador_svj;
  
  // Load the model with minimal options
  const { scene } = useGLTF(modelUrl);
  
  return (
    <group ref={group} dispose={null}>
      <primitive 
        object={scene}
        scale={1}
        position={[0, 0.6, 0]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}
