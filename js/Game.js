import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export class Game {
  constructor() {
    this._scene;
    this._camera;
    this._renderer;

    this._CreateScene();
    this._CreateCamera();
    this._CreateRenderer();
    this._OnAnimationFrame();
    this._LoadModels();
  }

  start() {
    this._OnAnimationFrame();
    console.log("start");
  }

  startDebugMode() {
    this._control = new OrbitControls(this._camera, this._renderer.domElement);
    this._control.update();
  }

  _CreateScene() {
    this._scene = new THREE.Scene();
    let light;
    let helper;
    light = new THREE.DirectionalLight(0xffffff, 4);
    light.position.set(10, 10, -10);
    helper = new THREE.DirectionalLightHelper(light, 1, 0xff0000);
    this._scene.add(light);
    this._scene.add(helper);

    // light = new THREE.AmbientLight(0x101010);
    // this._scene.add(light);

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        // wireframe: true,
      })
    );
    plane.castShadow = true;
    plane.rotation.x = Math.PI / 2;
    plane.rotation.y = Math.PI ;
    this._scene.add(plane);

    console.log("scene created");
  }
  _CreateCamera() {
    this._camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this._camera.lookAt(0, 0, 0);
    this._camera.position.set(20, 20, 20);
    console.log("camera created");
  }

  _CreateRenderer() {
    this._renderer = new THREE.WebGLRenderer();
    this._renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this._renderer.domElement);
    window.addEventListener("resize", this._OnWindowResize);
    console.log("renderer created");
  }

  _OnAnimationFrame() {
    requestAnimationFrame(() => {
      this._renderer.render(this._scene, this._camera);
      this._OnAnimationFrame();
    });
  }

  _OnWindowResize() {
    this._camera.aspect = window.innerWidth / window.innerHeight;
    this._camera.updateProjectionMatrix();
    this._renderer.setSize(window.innerWidth, window.innerHeight);
  }

  _LoadModels() {
    const loader = new GLTFLoader();
    loader.load("../asset/models/ambulance.glb", (root) => {
      root.scene.scale.set(2, 2, 2);
      this._scene.add(root.scene);
      console.log("model loaded");
    });
  }
}
