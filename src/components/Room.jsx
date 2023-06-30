
import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

import * as THREE from 'three'

export function Room(props) {
  const { nodes, materials } = useGLTF('models/room.gltf')
    const texture = useTexture('textures/baked.png')

    const textureMaterial = new THREE.MeshStandardMaterial({
        map: texture,
    })
    texture.flipY = false
    texture.encoding = THREE.sRGBEncoding


  return (
    <group {...props} dispose={null}>
    <group name="RootNode" position={[0.03, -0.02, 0]}>
      <group name="Light_Stand1" position={[0.89, 0, 0.98]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh name="Light_Stand1_1" geometry={nodes.Light_Stand1_1.geometry} material={textureMaterial} />
        <mesh name="Light_Stand1_2" geometry={nodes.Light_Stand1_2.geometry} material={textureMaterial} />
      </group>
    </group>
    <group name="mousepad" position={[0.87, 0.45, 0.33]}>
      <mesh name="Mousepad" geometry={nodes.Mousepad.geometry} material={textureMaterial} position={[0.02, 0, -0.03]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
    <group name="RootNode001" position={[1.1, 0.45, 0.39]} rotation={[Math.PI, -0.67, Math.PI]}>
      <group name="Light_Desk" rotation={[-Math.PI / 2, 0, 0]}>
        <mesh name="Light_Desk_1" geometry={nodes.Light_Desk_1.geometry} material={textureMaterial} />
        <mesh name="Light_Desk_2" geometry={nodes.Light_Desk_2.geometry} material={textureMaterial} />
        <mesh name="Light_Desk_3" geometry={nodes.Light_Desk_3.geometry} material={textureMaterial} />
      </group>
    </group>
    <mesh name="plant" geometry={nodes.plant.geometry} material={textureMaterial} position={[0.98, 0.19, -1.04]}>
      <mesh name="group1025492697" geometry={nodes.group1025492697.geometry} material={textureMaterial} />
      <mesh name="group103419857" geometry={nodes.group103419857.geometry} material={textureMaterial} />
      <mesh name="group1278045090" geometry={nodes.group1278045090.geometry} material={textureMaterial} />
      <mesh name="group1308825903" geometry={nodes.group1308825903.geometry} material={textureMaterial} />
      <mesh name="group1377145234" geometry={nodes.group1377145234.geometry} material={textureMaterial} />
      <mesh name="group1377232627" geometry={nodes.group1377232627.geometry} material={textureMaterial} />
      <mesh name="group1406455588" geometry={nodes.group1406455588.geometry} material={textureMaterial} />
      <mesh name="group1417853301" geometry={nodes.group1417853301.geometry} material={textureMaterial} />
      <mesh name="group1507777984" geometry={nodes.group1507777984.geometry} material={textureMaterial} />
      <mesh name="group1647754183" geometry={nodes.group1647754183.geometry} material={textureMaterial} />
      <mesh name="group1699085095" geometry={nodes.group1699085095.geometry} material={textureMaterial} />
      <mesh name="group172818934" geometry={nodes.group172818934.geometry} material={textureMaterial} />
      <mesh name="group1781696643" geometry={nodes.group1781696643.geometry} material={textureMaterial} />
      <mesh name="group1987077651" geometry={nodes.group1987077651.geometry} material={textureMaterial} />
      <mesh name="group1989238829" geometry={nodes.group1989238829.geometry} material={textureMaterial} />
      <mesh name="group2053840647" geometry={nodes.group2053840647.geometry} material={textureMaterial} />
      <mesh name="group24448074" geometry={nodes.group24448074.geometry} material={textureMaterial} />
      <mesh name="group31856083" geometry={nodes.group31856083.geometry} material={textureMaterial} />
      <mesh name="group476784665" geometry={nodes.group476784665.geometry} material={textureMaterial} />
      <mesh name="group525605584" geometry={nodes.group525605584.geometry} material={textureMaterial} />
      <mesh name="group560799048" geometry={nodes.group560799048.geometry} material={textureMaterial} />
      <mesh name="group714662036" geometry={nodes.group714662036.geometry} material={textureMaterial} />
      <mesh name="group722357104" geometry={nodes.group722357104.geometry} material={textureMaterial} />
      <mesh name="mesh1885116500" geometry={nodes.mesh1885116500.geometry} material={textureMaterial} />
      <mesh name="mesh1885116500_1" geometry={nodes.mesh1885116500_1.geometry} material={textureMaterial} />
    </mesh>
    <mesh name="desk" geometry={nodes.desk.geometry} material={textureMaterial} position={[0.99, 0.01, 0.01]} rotation={[-3.14, -0.01, 3.14]}>
      <mesh name="Cube001_Cube002" geometry={nodes.Cube001_Cube002.geometry} material={textureMaterial} />
      <mesh name="Cube002_Cube003" geometry={nodes.Cube002_Cube003.geometry} material={textureMaterial} />
      <mesh name="Cube003_Cube004" geometry={nodes.Cube003_Cube004.geometry} material={textureMaterial} />
      <mesh name="Cube004_Cube005" geometry={nodes.Cube004_Cube005.geometry} material={textureMaterial} />
      <mesh name="Cube005_Cube006" geometry={nodes.Cube005_Cube006.geometry} material={textureMaterial} />
      <mesh name="Cube006_Cube007" geometry={nodes.Cube006_Cube007.geometry} material={textureMaterial} />
      <mesh name="Cube_Cube001" geometry={nodes.Cube_Cube001.geometry} material={textureMaterial} />
      <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={textureMaterial} />
      <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={textureMaterial} />
      <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={textureMaterial} />
      <mesh name="Cylinder003" geometry={nodes.Cylinder003.geometry} material={textureMaterial} />
      <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={textureMaterial} />
      <mesh name="Cylinder005" geometry={nodes.Cylinder005.geometry} material={textureMaterial} />
      <mesh name="Cylinder006" geometry={nodes.Cylinder006.geometry} material={textureMaterial} />
      <mesh name="Cylinder007" geometry={nodes.Cylinder007.geometry} material={textureMaterial} />
      <mesh name="Cylinder008" geometry={nodes.Cylinder008.geometry} material={textureMaterial} />
      <mesh name="Cylinder009" geometry={nodes.Cylinder009.geometry} material={textureMaterial} />
      <mesh name="Cylinder010" geometry={nodes.Cylinder010.geometry} material={textureMaterial} />
      <mesh name="Cylinder011" geometry={nodes.Cylinder011.geometry} material={textureMaterial} />
      <mesh name="Cylinder012" geometry={nodes.Cylinder012.geometry} material={textureMaterial} />
      <mesh name="Cylinder013" geometry={nodes.Cylinder013.geometry} material={textureMaterial} />
      <mesh name="Plane001_Plane002" geometry={nodes.Plane001_Plane002.geometry} material={textureMaterial} />
    </mesh>
    <mesh name="keyboard" geometry={nodes.keyboard.geometry} material={textureMaterial} position={[0.9, 0.46, -0.05]} rotation={[Math.PI, -1.56, Math.PI]}>
      <mesh name="group1030983910" geometry={nodes.group1030983910.geometry} material={textureMaterial} />
      <mesh name="group1075691498" geometry={nodes.group1075691498.geometry} material={textureMaterial} />
      <mesh name="group1149852049" geometry={nodes.group1149852049.geometry} material={textureMaterial} />
      <mesh name="group1152190519" geometry={nodes.group1152190519.geometry} material={textureMaterial} />
      <mesh name="group1180881246" geometry={nodes.group1180881246.geometry} material={textureMaterial} />
      <mesh name="group1238060299" geometry={nodes.group1238060299.geometry} material={textureMaterial} />
      <mesh name="group1238428394" geometry={nodes.group1238428394.geometry} material={textureMaterial} />
      <mesh name="group1272091893" geometry={nodes.group1272091893.geometry} material={textureMaterial} />
      <mesh name="group1316349499" geometry={nodes.group1316349499.geometry} material={textureMaterial} />
      <mesh name="group1323238240" geometry={nodes.group1323238240.geometry} material={textureMaterial} />
      <mesh name="group145618305" geometry={nodes.group145618305.geometry} material={textureMaterial} />
      <mesh name="group1486350934" geometry={nodes.group1486350934.geometry} material={textureMaterial} />
      <mesh name="group150579309" geometry={nodes.group150579309.geometry} material={textureMaterial} />
      <mesh name="group1529968652" geometry={nodes.group1529968652.geometry} material={textureMaterial} />
      <mesh name="group1571332333" geometry={nodes.group1571332333.geometry} material={textureMaterial} />
      <mesh name="group1581414308" geometry={nodes.group1581414308.geometry} material={textureMaterial} />
      <mesh name="group1589752359" geometry={nodes.group1589752359.geometry} material={textureMaterial} />
      <mesh name="group1629393722" geometry={nodes.group1629393722.geometry} material={textureMaterial} />
      <mesh name="group1629609685" geometry={nodes.group1629609685.geometry} material={textureMaterial} />
      <mesh name="group1675960081" geometry={nodes.group1675960081.geometry} material={textureMaterial} />
      <mesh name="group1740918352" geometry={nodes.group1740918352.geometry} material={textureMaterial} />
      <mesh name="group1753917514" geometry={nodes.group1753917514.geometry} material={textureMaterial} />
      <mesh name="group1754683637" geometry={nodes.group1754683637.geometry} material={textureMaterial} />
      <mesh name="group1764140354" geometry={nodes.group1764140354.geometry} material={textureMaterial} />
      <mesh name="group1870575723" geometry={nodes.group1870575723.geometry} material={textureMaterial} />
      <mesh name="group1899843208" geometry={nodes.group1899843208.geometry} material={textureMaterial} />
      <mesh name="group1956214489" geometry={nodes.group1956214489.geometry} material={textureMaterial} />
      <mesh name="group196400395" geometry={nodes.group196400395.geometry} material={textureMaterial} />
      <mesh name="group1976194690" geometry={nodes.group1976194690.geometry} material={textureMaterial} />
      <mesh name="group205302596" geometry={nodes.group205302596.geometry} material={textureMaterial} />
      <mesh name="group2074153597" geometry={nodes.group2074153597.geometry} material={textureMaterial} />
      <mesh name="group2085389804" geometry={nodes.group2085389804.geometry} material={textureMaterial} />
      <mesh name="group2091112366" geometry={nodes.group2091112366.geometry} material={textureMaterial} />
      <mesh name="group2106755496" geometry={nodes.group2106755496.geometry} material={textureMaterial} />
      <mesh name="group2146178072" geometry={nodes.group2146178072.geometry} material={textureMaterial} />
      <mesh name="group252681800" geometry={nodes.group252681800.geometry} material={textureMaterial} />
      <mesh name="group268332703" geometry={nodes.group268332703.geometry} material={textureMaterial} />
      <mesh name="group287159489" geometry={nodes.group287159489.geometry} material={textureMaterial} />
      <mesh name="group295085766" geometry={nodes.group295085766.geometry} material={textureMaterial} />
      <mesh name="group311988427" geometry={nodes.group311988427.geometry} material={textureMaterial} />
      <mesh name="group384612072" geometry={nodes.group384612072.geometry} material={textureMaterial} />
      <mesh name="group418912012" geometry={nodes.group418912012.geometry} material={textureMaterial} />
      <mesh name="group42243725" geometry={nodes.group42243725.geometry} material={textureMaterial} />
      <mesh name="group425587018" geometry={nodes.group425587018.geometry} material={textureMaterial} />
      <mesh name="group449779970" geometry={nodes.group449779970.geometry} material={textureMaterial} />
      <mesh name="group45382983" geometry={nodes.group45382983.geometry} material={textureMaterial} />
      <mesh name="group475225180" geometry={nodes.group475225180.geometry} material={textureMaterial} />
      <mesh name="group573547017" geometry={nodes.group573547017.geometry} material={textureMaterial} />
      <mesh name="group588539140" geometry={nodes.group588539140.geometry} material={textureMaterial} />
      <mesh name="group601803475" geometry={nodes.group601803475.geometry} material={textureMaterial} />
      <mesh name="group616518658" geometry={nodes.group616518658.geometry} material={textureMaterial} />
      <mesh name="group687259746" geometry={nodes.group687259746.geometry} material={textureMaterial} />
      <mesh name="group706802639" geometry={nodes.group706802639.geometry} material={textureMaterial} />
      <mesh name="group729811280" geometry={nodes.group729811280.geometry} material={textureMaterial} />
      <mesh name="group77921105" geometry={nodes.group77921105.geometry} material={textureMaterial} />
      <mesh name="group790925258" geometry={nodes.group790925258.geometry} material={textureMaterial} />
      <mesh name="group801095923" geometry={nodes.group801095923.geometry} material={textureMaterial} />
      <mesh name="group806343109" geometry={nodes.group806343109.geometry} material={textureMaterial} />
      <mesh name="group826580911" geometry={nodes.group826580911.geometry} material={textureMaterial} />
      <mesh name="group873458270" geometry={nodes.group873458270.geometry} material={textureMaterial} />
      <mesh name="group873558583" geometry={nodes.group873558583.geometry} material={textureMaterial} />
      <mesh name="group877249531" geometry={nodes.group877249531.geometry} material={textureMaterial} scale={0.18} />
      <mesh name="group954813675" geometry={nodes.group954813675.geometry} material={textureMaterial} />
      <mesh name="group96314515" geometry={nodes.group96314515.geometry} material={textureMaterial} />
      <mesh name="group96968687" geometry={nodes.group96968687.geometry} material={textureMaterial} />
      <mesh name="group993315105" geometry={nodes.group993315105.geometry} material={textureMaterial} />
    </mesh>
    <group name="chair" position={[5.04, -0.03, 6.82]} rotation={[-2.49, 1.55, 2.5]}>
      <mesh name="Node-Mesh" geometry={nodes['Node-Mesh'].geometry} material={textureMaterial} />
      <mesh name="Node-Mesh_1" geometry={nodes['Node-Mesh_1'].geometry} material={textureMaterial} />
    </group>
    <group name="shelf" position={[1.17, 1.06, -0.59]} rotation={[0, -1.57, 0]}>
      <mesh name="SM_ShelfSM_Shelf1_1" geometry={nodes.SM_ShelfSM_Shelf1_1.geometry} material={textureMaterial} />
      <mesh name="SM_ShelfSM_Shelf1_1_1" geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry} material={textureMaterial} />
    </group>
    <group name="boombox" position={[1.15, 1.32, -0.43]} rotation={[-Math.PI, 1.31, -Math.PI]}>
      <mesh name="mesh799403676" geometry={nodes.mesh799403676.geometry} material={textureMaterial} />
      <mesh name="mesh799403676_1" geometry={nodes.mesh799403676_1.geometry} material={textureMaterial} />
      <mesh name="mesh799403676_2" geometry={nodes.mesh799403676_2.geometry} material={textureMaterial} />
      <mesh name="mesh799403676_3" geometry={nodes.mesh799403676_3.geometry} material={textureMaterial} />
      <mesh name="mesh799403676_4" geometry={nodes.mesh799403676_4.geometry} material={textureMaterial} />
      <mesh name="mesh799403676_5" geometry={nodes.mesh799403676_5.geometry} material={textureMaterial} />
    </group>
    <group name="lava_lamp" position={[1.17, 1.24, -0.82]}>
      <mesh name="Node-Mesh001" geometry={nodes['Node-Mesh001'].geometry} material={textureMaterial} />
      <mesh name="Node-Mesh001_1" geometry={nodes['Node-Mesh001_1'].geometry} material={textureMaterial} />
      <mesh name="Node-Mesh001_2" geometry={nodes['Node-Mesh001_2'].geometry} material={textureMaterial} />
    </group>
    <mesh name="Monitor" geometry={nodes.Monitor.geometry} material={textureMaterial} position={[1.11, 0.45, -0.06]} />
    <mesh name="coffee" geometry={nodes.coffee.geometry} material={textureMaterial} position={[1.01, 0.53, -0.38]} />
    <mesh name="ComputerMouse_mesh" geometry={nodes.ComputerMouse_mesh.geometry} material={textureMaterial} position={[0.88, 0.45, 0.3]} rotation={[0, 1.57, 0]} />
    <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={textureMaterial} />
    <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={textureMaterial} />
    <mesh name="Plane_3" geometry={nodes.Plane_3.geometry} material={textureMaterial} />
  </group> 
  )
}

useGLTF.preload('models/room.gltf')
