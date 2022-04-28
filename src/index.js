//CAPNGANJ Tie Dye fxhash generative token
//April -> May, 2022

//imports
import { Features } from './Features';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


//1) - generate fxhash features - global driving parameters
//new featuresClass
let feet = new Features();
window.$fxhashData = feet;

// FX Features
window.$fxhashFeatures = {
  "Palette": feet.color.name,
  "Scale": feet.scale.tag,
  "Speed": feet.speed.tag,
  "Brightness": feet.brightness.tag,
  "Depth": feet.permutations.tag
};
console.log(window.$fxhashFeatures);
console.log(feet);

//vars related to fxhash preview call
//loaded tracks whether texture has loaded;
//previewed tracks whether preview has been called
let loaded = false;
let previewed = false;

//from fxhash webpack boilerplate
// these are the variables you can use as inputs to your algorithms
//console.log(fxhash)   // the 64 chars hex number fed to your algorithm
//console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()
//console.log("fxhash features", window.$fxhashFeatures);


//2) Initialize three.js scene and start the render loop
//all data driving geometry and materials and whatever else should be generated in step 2

//scene & camera
let scene = new THREE.Scene();

let renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.set(0, 0, 4);

//lights
//const amb = new THREE.AmbientLight(0xffffff);
//scene.add(amb);

// controls
let controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.2;
controls.enableRotate = false;
//controls.enablePan = false;
//controls.autoRotate = true;
controls.maxDistance = 7;
controls.minDistance = 0.1;


//shader uniforms!
let uniforms = {
  //used by both vertex and fragment
  time: { value: 1.0 },

  //vertex only

  //fragment only
  Randomise_Fractal: { value: [0.2, 0.7]},
  x1: { value: 1.0 },
  y1: { value: 1.05 },
  z1: { value: 1.0 },
  t: { value: 1.0 },
  NUM_SIDES: { value: 3.0 }
};

//plane geometry
const pln = new THREE.PlaneGeometry(10, 10);

//placeholder material for testing
const material2 = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});

//first shot at a shader material
const material = new THREE.ShaderMaterial({
  uniforms: uniforms,
  vertexShader: document.getElementById('vertexShader').textContent,
  fragmentShader: document.getElementById('fragmentShader').textContent
});

//add mesh to scene <3
const mesh = new THREE.Mesh(pln, material);
//mesh.scale.set(20, 20, 20);
//mesh.position.y -= 2;
scene.add(mesh);

//loaded flag for fxhash capture
loaded = true;


//set the background color 
let bod = document.body;
bod.style.backgroundColor = feet.color.background;


//set up resize listener and let it rip!
window.addEventListener('resize', onWindowResize);
animate();


// threejs animation stuff
function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}


function animate() {

  requestAnimationFrame(animate);

  uniforms['time'].value = performance.now() / 1000;

  controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

  render();

}


function render() {

  renderer.render(scene, camera);

  if (previewed == false && loaded == true) {
    fxpreview();
    previewed = true;
  }

  //mesh.rotation.y += 0.001;

}
