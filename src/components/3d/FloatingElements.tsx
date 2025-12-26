import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Icosahedron } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const FloatingSphere = ({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} position={position} args={[0.5, 32, 32]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const FloatingTorus = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <Torus ref={meshRef} position={position} args={[0.4, 0.15, 16, 32]}>
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Torus>
    </Float>
  );
};

const FloatingBox = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <Box ref={meshRef} position={position} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={1}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </Box>
    </Float>
  );
};

const FloatingIcosahedron = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <Float speed={1} rotationIntensity={2.5} floatIntensity={1}>
      <Icosahedron ref={meshRef} position={position} args={[0.6, 1]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={3}
          roughness={0.2}
          metalness={0.7}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </Icosahedron>
    </Float>
  );
};

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 -z-5 opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <spotLight position={[0, 5, 5]} intensity={0.8} color="#ec4899" angle={0.3} />

        {/* Cyan elements */}
        <FloatingSphere position={[-3, 2, 0]} color="#00d4ff" speed={0.8} />
        <FloatingTorus position={[3.5, -1, -1]} color="#00d4ff" />

        {/* Purple elements */}
        <FloatingBox position={[-2.5, -2, 1]} color="#8b5cf6" />
        <FloatingIcosahedron position={[3, 2.5, -2]} color="#8b5cf6" />

        {/* Magenta elements */}
        <FloatingSphere position={[2, -2.5, 0]} color="#ec4899" speed={1.2} />
        <FloatingTorus position={[-3.5, 0, -1]} color="#ec4899" />

        {/* Additional depth elements */}
        <FloatingBox position={[0, 3, -3]} color="#00d4ff" />
        <FloatingSphere position={[0, -3, -2]} color="#8b5cf6" speed={0.6} />
      </Canvas>
    </div>
  );
};
