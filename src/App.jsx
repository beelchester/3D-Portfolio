import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Scroll, ScrollControls } from "@react-three/drei";
import { useState } from "react";
import {ScrollManager} from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";
import { framerMotionConfig } from "./config";
import { Cursor } from "./components/Cursor";

function App() {
    const [section, setSection] = useState(0)
    const [menuOpened, setMenuOpened] = useState(false)
  return (
      <>
      <MotionConfig 
        transition={{
            ...framerMotionConfig
        }}
                >
    <Canvas shadows camera={{ position: [0, 1.5, 10], fov: 30 }}>
      <color attach="background" args={["#d6cafa"]} />
      <ScrollControls pages={2} damping={0.1}>
      <ScrollManager section={section} onSectionChange={setSection}/>
      <Scroll >
      <Experience section={section} menuOpened={menuOpened} 
      />
      </Scroll>
      <Scroll html>
      <Interface />
      </Scroll>
      </ScrollControls>
    </Canvas>
      <Menu  onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}
      />
      <Cursor />
      </MotionConfig>
      </>
  );
}

export default App;
