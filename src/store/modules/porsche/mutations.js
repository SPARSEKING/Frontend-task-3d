import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const mutations = {
  INITIALIZE_SCENE(state) {
    state.scene = new THREE.Scene();
    state.scene.background = new THREE.Color(0xffffff);
    const lightA = new THREE.DirectionalLight(0xffffff);
    lightA.position.set(1, 1, 1);
    state.scene.add(lightA);
    const lightB = new THREE.DirectionalLight(0x002288);
    lightB.position.set(-1, -1, -1);
    state.scene.add(lightB);
    const lightC = new THREE.AmbientLight(0x222222);
    state.scene.add(lightC);
  },
  INITIALIZE_CAMERA(state, payload) {
    state.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    state.camera.position.x = payload.X;
    state.camera.position.y = payload.Y;
    state.camera.position.z = payload.Z;
    console.log(state.camera.position);
  },
  INITIALIZE_RENDERER(state) {
    state.renderer = new THREE.WebGL1Renderer();
    state.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(state.renderer.domElement);
  },
  INITIALIZE_CONTROLS(state) {
    state.controls = new OrbitControls(state.camera, state.renderer.domElement);
    state.controls.update();
  },
  INITIALIZE_LIGHT(state) {
    state.light = new THREE.AmbientLight(0xd404040, 100);
    state.scene.add(state.light);
  },
  LOADER(state) {
    let loader = new GLTFLoader();

    loader.load("./model/scene.gltf", (gltf) => {
      let porsche = gltf.scene.children[0];
      porsche.scale.set(50, 50, 50);
      state.scene.add(gltf.scene);
    });
  },
};
