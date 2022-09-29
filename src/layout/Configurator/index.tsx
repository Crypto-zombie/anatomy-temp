/* eslint-disable react/no-unknown-property */
import { Canvas, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, useContextBridge } from '@react-three/drei';
import { useContext, useRef, useState } from 'react';
import ModelLoader from 'componentsForThree/ModelLoader';
import Style from './style.module.scss';
import Marker from 'componentsForThree/Marker';
import { ControlContext } from 'provider/ControlProvider';

export default function Configurator() {
  const ContextBridge = useContextBridge(ControlContext);
  const orbit = useRef<any>();
  const myMesh = useRef<THREE.Mesh>();
  return (
    <div className={Style.wrapper}>
      <Canvas camera={{ position: [0, 0, 80], fov: 50 }} dpr={[1, 2]}>
        <ContextBridge>
          <ambientLight intensity={0.4} />
          <ModelLoader />
          <Marker
            name={'test'}
            position={[0, 2, 4]}
            status={true}
            orbit={orbit}
            oclusionObj={myMesh as any}
          />
          <mesh ref={myMesh as any} scale={[30, 30, 1]} position={[0, 5, -6]}>
            <boxGeometry />
            <meshPhongMaterial color='royalblue' transparent opacity={0} />
          </mesh>
          <OrbitControls ref={orbit} />
        </ContextBridge>
      </Canvas>
    </div>
  );
}
