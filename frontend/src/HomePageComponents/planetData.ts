import tx1 from '../textures/mercury.jpg';
import tx2 from '../textures/venus.jpg';
import tx3 from '../textures/earth.jpg';
import tx4 from '../textures/mars.jpg';
import tx5 from '../textures/jupiter.jpg';
import tx6 from '../textures/saturn.jpg';
import tx7 from '../textures/uranus.jpg';
import tx8 from '../textures/neptune.jpg';
import tx9 from '../textures/pluto.jpg';

import naviagtetx1 from "../textures/mars_info.jpeg"
import naviagtetx2 from "../textures/mars_info.jpeg"
import naviagtetx3 from "../textures/mars_info.jpeg"
import naviagtetx4 from "../textures/mars_info.jpeg"
import naviagtetx5 from "../textures/mars_info.jpeg"
import naviagtetx6 from "../textures/mars_info.jpeg"
import naviagtetx7 from "../textures/mars_info.jpeg"
import naviagtetx8 from "../textures/mars_info.jpeg"
import naviagtetx9 from "../textures/mars_info.jpeg"


const random = (a: number, b: number) => a + Math.random() * b;
const randomInt = (a: number, b: number) => Math.floor(random(a, b));

const xRadius = [7.5, 8.5, 10, 15, 20, 26, 32, 42, 50];
const zRadius = [7.5, 8.5, 10, 15, 20, 26, 32, 42, 50];
const size = [0.99, 0.99, 1, 0.53, 5, 3, 4, 2.88, 0.18];
const speed = [0.241, 0.615, 1, 1.881, 11.86, 29.46, 84.01, 164.8, 247.9];
const offset = [0.205, 0.0068, 0.0167, 0.0934, 0.048, 0.053, 0.047, 0.009, 0.248];
const rotationSpeed = [0.004, 0.01, 0.01, 0.02, 0.004, 0.005, 0.002, 0.002, 0.001];

const textures = [tx1, tx2, tx3, tx4, tx5, tx6,tx7,tx8,tx9];

const name = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]; // name of the planet
const gravity = [3.7, 8.87, 9.8, 3.71, 24.79, 10.44, 8.87, 11.15, 0.62]; // gravity of the planet (in m/s^2)
const orbitalPeriod = [0.24, 0.62, 1, 1.88, 11.86, 29.46, 84.01, 164.8, 248.1]; // orbital period of the planet (in Earth years)
const surfaceArea = [74820, 460234, 510072000, 144798500, 61419000000, 427000000000, 8083200000, 7618200000, 168803000]; // surface area of the planet (in km^2)
const id = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"]; // unique identifier for the planet

const backgroundTextures = [naviagtetx1, naviagtetx2, naviagtetx3, naviagtetx4, naviagtetx5, naviagtetx6,naviagtetx7,naviagtetx8,naviagtetx9];


const planetData = [];
const totalPlanets = 9;
for (let index = 0; index < totalPlanets; index++) {
  planetData.push({
    id: index,
    xRadius: xRadius[index],
    zRadius: zRadius[index],
    size: size[index],
    speed: random(0.05, 0.06),
    offset: offset[index],
    rotationSpeed: rotationSpeed[index],
    textureMap: textures[index],
    name: name[index],
    gravity: gravity[index],
    orbitalPeriod: orbitalPeriod[index],
    surfaceArea: surfaceArea[index],
    backgroundImagetoSend: backgroundTextures[index]
  });
}

export default planetData;

