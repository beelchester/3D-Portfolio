import {
    Environment,
} from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
    return (
        <>
            <Environment preset="apartment" />
            <group position-y={-1} rotation-x={-Math.PI / 2}>
                <Avatar animation={"Standing"} />
            </group>
        </>
    );
};
