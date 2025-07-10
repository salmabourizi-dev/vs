import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

export const AnimatedLogo = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  // Charger la texture du logo
  const texture = useLoader(THREE.TextureLoader, '/documents/logo.png');

  // Animation de rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2.5, 2.5]} />
      <meshBasicMaterial map={texture} transparent={true} side={THREE.DoubleSide} />
    </mesh>
  );
};

// Ajoutez ceci dans votre CSS global ou tailwind.config.js :
// .animate-spin-slow { animation: spin 6s linear infinite; }
// @keyframes spin { 100% { transform: rotate(360deg); } }

