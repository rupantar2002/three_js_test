// import { BasicWorldDemo } from "./BasicWorld";
import { Game } from "./Game";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const game = new Game();
game.start();
game.startDebugMode();

// // setting up canvas
// const canvas = document.getElementById("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// window.addEventListener("resize", ResizeWindow);
// // renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
// // camera settings
// const fov = 45;
// const aspect_ratio = canvas.width / canvas.height;
// const near = 0.1;
// const far = 100;
// const camera = new THREE.PerspectiveCamera(fov, aspect_ratio, near, far);
// camera.position.z = 2;
// // scene
// const scene = new THREE.Scene();
// // testure loader
// const textureLoader = new THREE.TextureLoader();

// // adding objects
// // TODO testing
// const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
// const material = new THREE.MeshBasicMaterial({
//   color: 0xfffffff,
//   map: textureLoader.load("images/lava_texture.png"),
// });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);
// // CreateTexturedObject(0, 0, 0, "images/lava_texture.png");

// // lighting
// AddDirectionalLight(-1, 2, 4, 1, 0xffffff);
// // rendering
// Render();

// function ResizeWindow() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   camera.aspect = canvas.width / canvas.height;
//   camera.updateProjectionMatrix();
//   renderer.setSize(canvas.width, canvas.height);
// }

// function Render(time) {
//   mesh.rotation.set(0, time * 0.001, 0);
//   renderer.clearColor();
//   renderer.clearDepth();
//   renderer.render(scene, camera);
//   requestAnimationFrame(Render);
// }

// function AddDirectionalLight(x, y, z, intencity, color) {
//   const light = new THREE.DirectionalLight(color, intencity);
//   light.position.set(x, y, z);
//   scene.add(light);
// }

// function CreateTexturedObject(x, y, z, filepath) {
//   const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
//   const material = new THREE.MeshBasicMaterial({
//     color: 0xfffffff,
//     map: textureLoader.load(filepath),
//   });
//   const mesh = new THREE.Mesh(geometry, material);
//   mesh.position.set(x, y, z);
//   scene.add(mesh);
// }
