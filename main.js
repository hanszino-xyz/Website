import * as THREE from "three";

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const canvas = document.getElementById("scene");
if (!canvas) throw new Error("Missing #scene canvas");

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50);
camera.position.set(0, 0.2, 3);

const light1 = new THREE.DirectionalLight(0xffffff, 1.0);
light1.position.set(2, 2, 2);
scene.add(light1);

scene.add(new THREE.AmbientLight(0xffffff, 0.4));

const geo = new THREE.IcosahedronGeometry(0.85, 1);
const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.45, metalness: 0.1 });
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

function resize() {
  const w = canvas.clientWidth || 300;
  const h = canvas.clientHeight || 220;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener("resize", resize);
resize();

function tick(t) {
  const time = t * 0.001;
  mesh.rotation.y = time * 0.35;
  mesh.rotation.x = Math.sin(time * 0.4) * 0.08;
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);