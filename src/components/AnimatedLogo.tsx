
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const AnimatedLogo = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <group>
      {/* Main triangular shape inspired by the logo */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0, 2, 2, 3]} />
        <meshStandardMaterial 
          color="#1e40af" 
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      
      {/* Secondary shape */}
      <mesh position={[0, 0, -0.5]} rotation={[0, Math.PI, 0]}>
        <cylinderGeometry args={[0, 1.5, 1.5, 3]} />
        <meshStandardMaterial 
          color="#06b6d4" 
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Accent shape */}
      <mesh position={[0, 0, 0.5]}>
        <cylinderGeometry args={[0, 1, 1, 3]} />
        <meshStandardMaterial 
          color="#64748b" 
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
};
