import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'
import Apricot from './Apricot'

export default function App({ count = 200, depth = 150 }) {
  return (
    <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110, fov: 30 }}>
      {/* Background & Lightning */}
      <color attach="background" args={['#59f0b3']} />
      <spotLight position={[5, 5, 5]} intensity={1.5} penumbra={0.7} />

      {/* Scene */}
      <Suspense fallback={null}>
        {/* HDRI */}
        <Environment preset="sunset" />

        {/* Spawn of objects */}
        {Array.from({ length: count }, (_, idx) => (
          <Apricot key={idx} z={-(idx / count) * depth - 15} />
        ))}

        {/* Postprocessing */}
        <EffectComposer>
          <DepthOfField target={[0, 0, depth / 2]} focalLength={0.6} bokehScale={2} height={700} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
