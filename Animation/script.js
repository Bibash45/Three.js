console.log(THREE);

// Scene Mesh Camera Renderer

// Scene
const scene = new THREE.Scene();

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "purple",
});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height); // 1 and 2000 by default
camera.position.z = 3;

scene.add(camera);

// Renderer
const canvas = document.querySelector(".draw"); // select the canvas
const renderer = new THREE.WebGLRenderer({
  canvas,
}); // add Webgl renderer
renderer.setSize(aspect.width, aspect.height); // renderer size

// clock class
const clock = new THREE.Clock();

const animate = () => {
  // GetElapsedTime
  const elapsedTime = clock.getElapsedTime();

  // update rotation on X-axix
  mesh.rotation.y = elapsedTime * Math.PI * 2;

  // Renderer
  renderer.render(scene, camera);

  // RequestAnimationFrame
  window.requestAnimationFrame(animate);
};
animate();

// function will get called 60 time per second on some devices 0.01 * 60 = 0.6 on X
// function will get called 120 time per second on some devices 0.01 * 120 = 1.2 on X
// fps stands for frame per second
