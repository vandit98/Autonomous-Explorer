import React, { Suspense, useState, useRef } from "react";
import Dialog from "./HomePageComponents/Dialog";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Image } from "@react-three/drei";
import * as THREE from "three";
import planetData from "./HomePageComponents/planetData";
import sunTexture from "./textures/sun.jpg";
import start from "./textures/start.png";
import "./Home.css";
import StartPointFlag from "./HomePageComponents/StartPointFlag";
import { useNavigate } from "react-router-dom";

type PlanetProps = {
  planet: {
    color: string;
    xRadius: number;
    zRadius: number;
    size: number;
    speed: number;
    offset: number;
    rotationSpeed: number;
    textureMap: string;
    name: string;
    gravity: number;
    orbitalPeriod: number;
    surfaceArea: number;
    id: string;
    backgroundImagetoSend:string
  };
  setDialogData: (data: {
    name: string;
    gravity: number;
    orbitalPeriod: number;
    surfaceArea: number;
  }) => void;
};

function Home() {
  const [dialogData, setDialogData] = useState<{
    name: string;
    gravity: number;
    orbitalPeriod: number;
    surfaceArea: number;
  } | null>(null);

  const [startShow, setStartShow] = useState(false);
  const [clicked,setClicked] = useState(false)
  const [iconPosition, setIconPosition] = useState<number[]>(null);

  function calculateCanvasCoordinates(clientX: number, clientY: number) {
    const canvas = document.querySelector("canvas");
    const canvasWidth = canvas?.clientWidth || 0;
    const canvasHeight = canvas?.clientHeight || 0;

    const rect = canvas?.getBoundingClientRect();
    const offsetX = rect?.left || 0;
    const offsetY = rect?.top || 0;

    const pixelX = clientX - offsetX;
    const pixelY = clientY - offsetY;

    const canvasX = (pixelX / canvasWidth) * 2 - 1;
    const canvasY = -(pixelY / canvasHeight) * 2 + 1;

    return { x: canvasX, y: canvasY };
  }

  const hideDialog = () => {
    setDialogData(null);
  };

  const showStartIcon = () =>{
    setStartShow(true)
    setClicked(true)
  }

  return (
    <div className="main_component">
      <a
        href="https://medium.com/geekculture/build-3d-apps-with-react-animated-solar-system-part-2-1186a5c8bd1"
        className="article-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Step by step guide to how I build this
      </a>
      <Dialog hideDialog={hideDialog} dialogData={dialogData} />
      
      <StartPointFlag showStartIcon={showStartIcon} clicked={clicked}/>

      <Canvas
        camera={{ position: [0, 0, 80], fov: 45 }}
        onClick={(e) => {
          if (startShow) {
            const { x, y } = calculateCanvasCoordinates(e.clientX, e.clientY);
            setIconPosition([x, y]);
          }
        }}
      >
        <Suspense fallback={null}>
          <Sun />
          {planetData.map((planet) => (
            <Planet
              planet={planet}
              key={planet.id}
              setDialogData={setDialogData}
            />
          ))}
          <Lights />
          <OrbitControls />
          {iconPosition && startShow && (
            <StartPoint/>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Home;

function Sun() {
  const texture = useLoader(THREE.TextureLoader, sunTexture);
  return (
    <mesh>
      <sphereGeometry args={[7, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function Planet({ planet, setDialogData }: PlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, planet.textureMap);
  const navigate = useNavigate()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * planet.speed + planet.offset;
    const x = planet.xRadius * Math.sin(t);
    const z = planet.zRadius * Math.cos(t);
    if (planetRef.current) {
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
      planetRef.current.rotation.y += planet.rotationSpeed;
    }
  });

  return (
    <>
      <mesh
        ref={planetRef}
        onClick={() => {
          setDialogData({
            name: planet.name,
            gravity: planet.gravity,
            orbitalPeriod: planet.orbitalPeriod,
            surfaceArea: planet.surfaceArea,
          });

          navigate(`/planet/${planet.name}`, { state: { additionalData: planet.backgroundImagetoSend } })
          console.log(planet.backgroundImagetoSend)
        }}
      >
        <sphereGeometry args={[planet.size, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
}

function StartPoint() {
  const flagRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, start);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() *0.06+ 0.009;
    const x = 36.5 * Math.sin(t);
    const z = 36.5 * Math.cos(t);
    if (flagRef.current) {
      flagRef.current.position.x = x;
      flagRef.current.position.z = z;
      flagRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <mesh
        ref={flagRef}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight />

      <pointLight position={[0, 0, 0]} />
    </>
  );
}

