import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Apricot({ z }) {
  const group = useRef(null)

  {
    /* warn: .geometry is not included with THREE.Object3D<Event> and idk why */
  }
  const { nodes, materials }: any = useGLTF('files/apricot.glb')

  const { viewport, camera } = useThree()
  const { width, height } = viewport.getCurrentViewport(camera, new THREE.Vector3(0, 0, z))

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rndX: (Math.floor(Math.random()) || -1) * Math.random() * Math.PI,
    rndY: (Math.floor(Math.random()) || -1) * Math.random() * Math.PI,
    rndZ: (Math.floor(Math.random()) || -1) * Math.random() * Math.PI
  })

  useFrame(() => {
    group.current.rotation.x = data.rndX += 0.003
    group.current.rotation.y = data.rndY += 0.003
    group.current.rotation.z = data.rndZ += 0.003
    group.current.position.set(data.x * width, (data.y -= 0.02), z)

    if (data.y < -height) {
      data.y = height
    }
  })

  return (
    <group ref={group} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={0.2}>
      <group position={[0.04, 0, 3.06]} scale={0.11}>
        <mesh geometry={nodes.stem_0.geometry} material={materials.stem} />
      </group>
      <group position={[0, 0, -0.65]} scale={4.22}>
        <mesh geometry={nodes.peach_0.geometry} material={materials.peach} />
      </group>
      <group position={[-2.27, -0.2, 3.86]} rotation={[Math.PI / 2, 0, 0]} scale={0.33}>
        <mesh geometry={nodes.leaf_02_0.geometry} material={nodes.leaf_02_0.material} />
      </group>
      <group position={[1.58, -0.2, 3.67]} rotation={[Math.PI / 2, 0, 0]} scale={0.21}>
        <mesh geometry={nodes.leaf_01_0.geometry} material={nodes.leaf_01_0.material} />
      </group>
    </group>
  )
}

useGLTF.preload('files/apricot.glb')
