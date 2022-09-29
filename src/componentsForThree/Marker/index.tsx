/* eslint-disable react/no-unknown-property */
import { Html, TransformControls } from '@react-three/drei';
import classNames from 'classnames';
import { ControlContext } from 'provider/ControlProvider';
import React, { useRef } from 'react';
import { useEffect, useContext, useState } from 'react';
import { DoubleSide } from 'three';
import Styles from './style.module.scss';

type Props = {
  name: string;
  position: Array<number>;
  status?: boolean;
  colorIndex?: number;
  orbit?: any;
  oclusionObj: any;
};

const Marker = ({
  name,
  position,
  status = false,
  colorIndex = 0,
  orbit,
  oclusionObj,
}: Props) => {
  const transform = useRef<any>();
  useEffect(() => {
    if (transform.current) {
      const controls: any = transform.current;
      const callback = (event: any) => {
        orbit.current.enabled = !event.value;
      };
      controls.addEventListener('dragging-changed', callback);
      return () => controls.removeEventListener('dragging-changed', callback);
    }
  });
  return (
    <group>
      <TransformControls ref={transform}>
        <mesh name={name}>
          <Html sprite occlude={[oclusionObj]} transform distanceFactor={12}>
            <span className={Styles.wrapper}>
              <span
                className={classNames(
                  Styles.animateEffect,
                  {
                    [Styles.sky]: colorIndex === 0,
                  },
                  {
                    [Styles.green]: colorIndex === 1,
                  },
                  {
                    [Styles.steel]: colorIndex === 2,
                  }
                )}
              ></span>
              <button
                className={classNames(
                  Styles.button,
                  {
                    [Styles.sky]: colorIndex === 0,
                  },
                  {
                    [Styles.green]: colorIndex === 1,
                  },
                  {
                    [Styles.steel]: colorIndex === 2,
                  }
                )}
              >
                <p className={Styles.symbol}>+</p>
                <p className={Styles.info}>&nbsp;{name}</p>
              </button>
            </span>
          </Html>
        </mesh>
      </TransformControls>
    </group>
  );
};

export default Marker;
