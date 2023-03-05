import * as THREE from "three";

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", ResizeCanvas);
// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
// camera settings
const fov = 45;
const aspect_ratio = canvas.width / canvas.height;
const near = 0.1;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov, aspect_ratio, near, far);
camera.position.z = 2;
// scene
const scene = new THREE.Scene();

// ex
const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
// const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
AddDirectionalLight(-1, 2, 4, 1, 0xffffff);

Render();

function ResizeCanvas() {
  console.log("window resized");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function Render(time) {
  time *= 0.001;
  cube.rotation.x = time * 0.1;
  cube.rotation.y = time * 0.1;
  renderer.render(scene, camera);
  requestAnimationFrame(Render);
}

function AddDirectionalLight(x, y, z, intencity, color) {
  const light = new THREE.DirectionalLight(color, intencity);
  light.position.set(x, y, z);
  scene.add(light);
}
