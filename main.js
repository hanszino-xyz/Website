import * as THREE from "three";

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Top canvas playground
const canvas = document.getElementById("threeTop");

if (canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0.4, 3.2);

  // Lights
  const key = new THREE.DirectionalLight(0xffffff, 1.0);
  key.position.set(2, 2, 2);
  scene.add(key);

  scene.add(new THREE.AmbientLight(0xffffff, 0.35));

  // Demo geometry (swap this for your experiments)
  const mesh = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.7, 0.22, 180, 24),
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.35,
      metalness: 0.15
    })
  );
  scene.add(mesh);

  // Optional fog vibe
  scene.fog = new THREE.Fog(0x000000, 6, 16);

  function resize() {
    const w = canvas.clientWidth || 600;
    const h = canvas.clientHeight || 320;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  window.addEventListener("resize", resize);
  resize();

  function tick(t) {
    const time = t * 0.001;

    // Animation playground
    mesh.rotation.y = time * 0.6;
    mesh.rotation.x = Math.sin(time * 0.35) * 0.2;
    mesh.position.y = Math.sin(time * 0.8) * 0.06;

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}