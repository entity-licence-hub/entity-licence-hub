import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

export default function Globe() {
  return (
    <Canvas style={{ height: 500, width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <mesh>
          <sphereGeometry args={[2, 64, 64]} />
          <meshStandardMaterial color="#0d6efd" wireframe />
        </mesh>
      </Suspense>
      <OrbitControls enableZoom={true} />
      <Stars radius={100} depth={50} count={5000} factor={4} />
    </Canvas>
  );
}
