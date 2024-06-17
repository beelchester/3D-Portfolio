import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import { Cursor } from "./components/Cursor";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { LoadingScreen } from "./components/LoadingScreen";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from "@vercel/analytics/react"

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
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const [showExperience, setShowExperience] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  useEffect(() => {
    if (started && isMobile) {
      const timer = setTimeout(() => {
        setShowExperience(true);
      }, 3000);
      return () => clearTimeout(timer);
    } else if (started) {
      setShowExperience(true);
    }
  }, [started, isMobile]);

  return (
    <>
      <ToastContainer />
      <Analytics />
      <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows >
          <CustomCamera />
          <color attach="background" args={["#d6cafa"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Suspense>
                {
                  showExperience && (
                    <Experience section={section} menuOpened={menuOpened} />
                  )}
              </Suspense>
            </Scroll>
            <Scroll html>
              {started && <Interface setSection={setSection} />}
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        {!isMobile && <Cursor />}
      </MotionConfig>
    </>
  );
}

export default App;
