import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// setting up canvas
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", ResizeWindow);
// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
// camera settings
const fov = 45;
const aspect_ratio = canvas.width / canvas.height;
const near = 100;
const far = 10000;
const camera = new THREE.PerspectiveCamera(fov, aspect_ratio, near, far);
camera.position.set(600, 600, 600);
camera.lookAt(0, 0, 0);
// scene
const scene = new THREE.Scene();

// skybox
scene.background = new THREE.CubeTextureLoader()
  .setPath("asset/cubemaps/")
  .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);

// light
const dirLight = new THREE.DirectionalLight();
dirLight.position.set(0, 800, 0);
dirLight.color.set(0xffffff);
dirLight.intensity = 1;
const dirLightHelper = new THREE.DirectionalLightHelper(
  dirLight,
  100,
  0xff0000
);
scene.add(dirLight);
scene.add(dirLightHelper);

// load model
const gltfLoader = new GLTFLoader();
gltfLoader.load("asset/scene/scene.gltf", (model) => {
  const root = model.scene;
  scene.add(root);
});

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// rendering
Render();

function ResizeWindow() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  camera.aspect = canvas.width / canvas.height;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.width, canvas.height);
}

function Render(time) {
  controls.update();
  renderer.clearColor();
  renderer.clearDepth();
  renderer.render(scene, camera);
  requestAnimationFrame(Render);
}
