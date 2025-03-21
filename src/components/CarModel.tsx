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

export default function CarModel({ modelPath, autoRotate }: CarModelProps) {
  const group = useRef<Group>(null);
  
  // This effect rotates the car
  useFrame((_, delta) => {
    if (group.current && autoRotate) {
      group.current.rotation.y += delta * 0.5; // Adjust speed as needed
    }
  });

  let modelUrl = "";
  
  // Map model path to actual model file location
  switch (modelPath) {
    case "lamborghini_aventador_svj":
      modelUrl = "/lamborghini_aventador_svj/scene.gltf";
      break;
    default:
      modelUrl = "/nissan_gtr/scene.gltf";
  }
  
  const { scene } = useGLTF(modelUrl);
  
  // Clone the scene to avoid issues with multiple instances
  const model = scene.clone();

  return (
    <group ref={group} dispose={null}>
      <primitive 
        object={model}
        scale={1}
        position={[0, 0.6, 0]} // Adjusted Y position by +0.4
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

// Pre-load models to improve performance
useGLTF.preload("/nissan_gtr/scene.gltf");
useGLTF.preload("/aston_martin_vulcan/scene.gltf");
useGLTF.preload("/porsche_911_carrera_4s/scene.gltf");
useGLTF.preload("/lamborghini_aventador_svj/scene.gltf");
useGLTF.preload("/lamborghini_terzo_millennio/scene.gltf");
