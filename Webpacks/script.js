// Scene
const scene = new THREE.Scene();

// TextureLoader
const textureLoader = new THREE.TextureLoader();
const colorTexture = textureLoader.load("./texture/map.jpg"); // Adjust path as necessary

// Mesh
const geometry = new THREE.TorusBufferGeometry(0.3, 0.2, 32, 32);
const material = new THREE.MeshNormalMaterial({
  map: colorTexture, // Apply texture
  side: THREE.DoubleSide, // Render both sides
  color: new THREE.Color("skyblue"), // Optional base color
  transparent: true, // Enable transparency
  opacity: 0.8, // Slight transparency
  // visible : false,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 2;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".draw"); // Ensure this exists in your HTML
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Handle Resizing
window.addEventListener("resize", () => {
  aspect.width = window.innerWidth;
  aspect.height = window.innerHeight;

  camera.aspect = aspect.width / aspect.height;
  camera.updateProjectionMatrix();

  renderer.setSize(aspect.width, aspect.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Clock Class
const clock = new THREE.Clock();

const animate = () => {
  // Get Elapsed Time
  const elapsedTime = clock.getElapsedTime();

  // Mesh Rotation
  mesh.rotation.y = elapsedTime;

  // Renderer
  renderer.render(scene, camera);

  // Request Animation Frame
  window.requestAnimationFrame(animate);
};

animate();
