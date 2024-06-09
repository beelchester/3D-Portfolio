import { Canvas, useThree } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Scroll, ScrollControls } from "@react-three/drei";
import { useState, useEffect } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";
import { framerMotionConfig } from "./config";
import { Cursor } from "./components/Cursor";

const CustomCamera = () => {
  const { camera } = useThree();
  useEffect(() => {
    camera.fov = (window.innerWidth < 500) ? 15 : 12;
    camera.position.set(0, 1.5, 10);
    camera.lookAt(-0.5, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera]);
  return null;
};


function App() {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig
        }}
      >
        <Canvas shadows >
          <CustomCamera />
          <color attach="background" args={["#d6cafa"]} />
          <ScrollControls pages={2} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll >
              <Experience section={section} menuOpened={menuOpened}
              />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}
        />
        {!isMobile && <Cursor />}
      </MotionConfig>
    </>
  );
}

export default App;
