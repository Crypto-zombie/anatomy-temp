/* eslint-disable react/no-unknown-property */
import { useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Heart() {
  const { scene: model } = useLoader(GLTFLoader, 'model/heart.glb');
  return (
    <Suspense fallback={null}>
      <primitive object={model} />
    </Suspense>
  );
}
