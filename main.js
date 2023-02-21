import * as THREE from "three";
import { ArcballControls } from "three/examples/jsm/controls/ArcballControls";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Vector3 } from "three";
import { randFloat, randInt } from "three/src/math/mathutils";

console.log("main.js");

const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;

let camera, scene, renderer;

InitScene();
AddLight(100, 100, 100);
AddArcballControls();
// AddOrbitControls();
RenderScene();

function InitScene() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    45,
    WINDOW_WIDTH / WINDOW_HEIGHT,
    0.1,
    500
  );
  camera.position.set(100, 100, 100);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
  document.body.appendChild(renderer.domElement);

  AddSphere(0, 0, 0, 20);

  // for (let i = 0; i < 100; i++) {
  //   AddBox(randInt(-20, 20), randInt(-30, 30), randInt(-40, 40));
  // }
  // for (let i = 0; i < 4; i++) {
  //   AddSphere(
  //     randFloat(-10, 10),
  //     randFloat(-100, 100),
  //     randFloat(-100, 100),
  //     randFloat(-100, 100)
  //   );
  // }
}

function RenderScene() {
  requestAnimationFrame(RenderScene);
  renderer.render(scene, camera);
}

function AddBox(x, y, z) {
  let box = new THREE.BoxGeometry(
    randInt(1, 100),
    randInt(1, 100),
    randInt(1, 100)
  );
  let material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });

  let mesh = new THREE.Mesh(box, material);
  scene.add(mesh);
}

function AddSphere(x, y, z, r) {
  let box = new THREE.SphereGeometry(r, 32, 16);

  let material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    // wireframe: true,
  });

  // let material = new THREE.MeshPhongMaterial({
  //   color: 0xdddddd,
  //   specular: 0x009900,
  //   shininess: 30,
  //   flatShading: true,
  // });

  let mesh = new THREE.Mesh(box, material);
  mesh.position.set(x, y, z);
  scene.add(mesh);
}

function AddArcballControls() {
  const ctrl = new ArcballControls(camera, renderer.domElement, scene);
  ctrl.addEventListener("change", () => {
    renderer.render(scene, camera);
  });
}

function AddOrbitControls() {
  const ctrl = new OrbitControls(camera, renderer.domElement);
  ctrl.addEventListener("change", () => {
    renderer.render(scene, camera);
  });

  console.log("orbit control added");
}

function AddLight(x, y, z) {
  // light
  const light = new THREE.AmbientLight(0x404040); // soft white light
  scene.add(light);
}
