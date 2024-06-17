import {
    Environment,
} from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useEffect, useState } from "react";

export const Experience = ({ section }) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const contactAvatar = (section == 3) && !isMobile && (window.innerWidth > 800)
    const [animation, setAnimation] = useState("Standing")
    useEffect(() => {
        if (contactAvatar && section == 3) {
            setAnimation("Ninja_Move");
            setTimeout(() => {
                setAnimation("Ninja_Idle");
            }, 9200);
        }
        else {
            setAnimation("Standing")
        }
        if (section == 0) {
            setAnimation("Standing")
        }
    }, [contactAvatar, section])
    return (
        <>
            <Environment preset="apartment" />
            <group position-y={contactAvatar ? "-6.8" : "-1"} rotation-x={-Math.PI / 2} position-z={contactAvatar && 4} rotation-z={contactAvatar && -0.7} position-x={contactAvatar && 0.2}>
                <Avatar animation={animation} move={!contactAvatar} section={section} />
            </group>
        </>
    );
};
