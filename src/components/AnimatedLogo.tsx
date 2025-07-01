
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

export const AnimatedLogo = () => {
  const groupRef = useRef<Group>(null);
  const mainLogoRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Rotation principale du groupe
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
    
    if (mainLogoRef.current) {
      // Légère oscillation verticale
      mainLogoRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Forme principale du logo - Triangle fluide bleu foncé */}
      <mesh ref={mainLogoRef} position={[-0.3, 0.2, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0, 1.8, 1.2, 3, 1, false]} />
        <meshStandardMaterial 
          color="#1e3a8a" 
          metalness={0.3}
          roughness={0.4}
          emissive="#1e40af"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Partie cyan du logo */}
      <mesh position={[0.3, -0.4, 0.1]} rotation={[0, 0, -0.8]}>
        <cylinderGeometry args={[0, 1.4, 1.0, 3, 1, false]} />
        <meshStandardMaterial 
          color="#06b6d4" 
          metalness={0.3}
          roughness={0.4}
          emissive="#0891b2"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Partie grise du logo */}
      <mesh position={[0.6, 0.3, -0.05]} rotation={[0, 0, 2.2]}>
        <cylinderGeometry args={[0, 1.2, 0.8, 3, 1, false]} />
        <meshStandardMaterial 
          color="#9ca3af" 
          metalness={0.7}
          roughness={0.2}
          emissive="#6b7280"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Forme centrale arrondie - blanc */}
      <mesh position={[0, 0, 0.2]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.1}
          roughness={0.9}
          emissive="#f8fafc"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Élément de liaison fluide */}
      <mesh position={[0.1, -0.1, 0.05]} rotation={[Math.PI/4, 0, 0.5]}>
        <torusGeometry args={[0.8, 0.15, 8, 16]} />
        <meshStandardMaterial 
          color="#0ea5e9" 
          metalness={0.4}
          roughness={0.3}
          emissive="#0284c7"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Base d'ombre subtile */}
      <mesh position={[0, -1.5, -0.3]} rotation={[-Math.PI/2, 0, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial 
          color="#0f172a" 
          transparent
          opacity={0.1}
          roughness={1}
        />
      </mesh>
    </group>
  );
};
