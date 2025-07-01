
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

export const AnimatedLogo = () => {
  const groupRef = useRef<Group>(null);
  const mainLogoRef = useRef<Mesh>(null);
  const accentRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Rotation principale du groupe
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
    
    if (mainLogoRef.current) {
      // Légère oscillation verticale
      mainLogoRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.1;
    }
    
    if (accentRef.current) {
      // Rotation indépendante de l'accent
      accentRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Logo principal - Forme hexagonale stylisée */}
      <mesh ref={mainLogoRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 0.3, 6]} />
        <meshStandardMaterial 
          color="#1e40af" 
          metalness={0.8}
          roughness={0.2}
          emissive="#0f172a"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Élément central - Représente la stabilité */}
      <mesh position={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 6]} />
        <meshStandardMaterial 
          color="#06b6d4" 
          metalness={0.9}
          roughness={0.1}
          emissive="#0891b2"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Accent décoratif - Forme de diamant */}
      <mesh ref={accentRef} position={[0, 0, 0.35]}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial 
          color="#64748b" 
          metalness={1.0}
          roughness={0.0}
          emissive="#475569"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Éléments orbitaux - Représentent la croissance */}
      <group>
        <mesh position={[2, 0, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial 
            color="#3b82f6" 
            metalness={0.7}
            roughness={0.3}
            emissive="#1d4ed8"
            emissiveIntensity={0.4}
          />
        </mesh>
        
        <mesh position={[-1, 1.7, 0]} rotation={[0, 0, Math.PI/3]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial 
            color="#0ea5e9" 
            metalness={0.7}
            roughness={0.3}
            emissive="#0284c7"
            emissiveIntensity={0.4}
          />
        </mesh>
        
        <mesh position={[-1, -1.7, 0]} rotation={[0, 0, -Math.PI/3]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial 
            color="#0ea5e9" 
            metalness={0.7}
            roughness={0.3}
            emissive="#0284c7"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>

      {/* Base d'ombre subtile */}
      <mesh position={[0, -0.3, -0.1]} rotation={[-Math.PI/2, 0, 0]}>
        <planeGeometry args={[3, 3]} />
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
