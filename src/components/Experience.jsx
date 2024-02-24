import { useFrame, useThree } from "@react-three/fiber";
// import { Room } from "./Room";
import { motion } from "framer-motion-3d";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { framerMotionConfig } from "../config";

export const Experience = ({section, menuOpened}) => {

    const {viewport} = useThree()

    const cameraPositionX = useMotionValue()
    const cameraLookAtX = useMotionValue()

    useEffect(() => {
        animate(cameraPositionX, menuOpened ? -5 : 0,{
            ...framerMotionConfig
        })
        animate(cameraLookAtX, menuOpened ? 5 : 0,{
            ...framerMotionConfig
        })
    }, [menuOpened])

    useFrame((state) => {
        state.camera.position.x = cameraPositionX.get()
        state.camera.lookAt(cameraLookAtX.get(), 0, 0)
    })

  return (
    <>
      <ambientLight intensity={1} />
      <motion.group
        position={[0.58,2,5]}
      scale={[0.9,0.9,0.9]}
      rotation-y={Math.PI/4.5}
      animate={{
          y: section === 0 ? 0 : -1,
      }}
      >
      </motion.group>
    </>
  );
};
