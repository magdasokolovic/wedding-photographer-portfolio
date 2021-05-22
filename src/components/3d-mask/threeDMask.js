import React, {Suspense, useRef} from "react";

import {Html} from 'drei'
import {Canvas, useFrame} from 'react-three-fiber'
import {Section} from './section'
import {useGLTF } from "@react-three/drei";


const Model = () => {
    const gltf = useGLTF('heart/scene.gltf', true)
    return <primitive object={gltf.scene} dispose={null}/>
  }
  
  const Lights = () => {
    return (
      <>
        {/* Ambient Light illuminates lights for all objects */}
        <ambientLight intensity={0.3} />
        {/* Diretion light */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* Spotlight Large overhead light */}
        <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
      </>
    );
  };
  
  
  const HTMLContent = () => {

    const ref = useRef()
    useFrame(() => (ref.current.rotation.y += 0.01))
    return (
      <Section factor={1.5} offset={1}>
        <group position={[0, 380, 0]}>
  
          <mesh ref={ref} position={[0, 60, 0]}>
            <Model/>
          </mesh>
  
        <Html fullscreen>
              <div className="mask-container">
                   <h1 className="mask-title">
                        Weddings are happening despite corona!
                  </h1>
              </div>
          </Html>
        </group>
      </Section>
    )
   
  }
export default function ThreeDMask() {
    return (
        <div className="three-d-container">
            <Canvas
                colorManagement
                camera={{position: [0, 0, 120], fov: 100}}>
                  <Lights/>
                  <Suspense fallback={null}>
                      <HTMLContent/>
                  </Suspense>
            </Canvas>
        </div>
    )
}

