// Scene , Mesh , Camera, Renderer

// Scene
const scene = new THREE.Scene();

// Group
const group = new THREE.Group()

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "green" });
const mesh = new THREE.Mesh(geometry, material);

// mesh.position.z = 1;
// mesh.scale.x= 3
// mesh.scale.y= 1
// mesh.rotation.x=Math.PI * 0.25
// mesh.rotation.y=Math.PI * 1.25 // 1/8 Turn


// MeshTwo
const geometryT = new THREE.BoxGeometry(1,1,1)
const materialT = new THREE.MeshBasicMaterial({color: "red"})
const meshT = new THREE.Mesh(geometryT, materialT)
meshT.position.y = 2
meshT.position.x = 2

group.rotation.x = Math.PI * 1.25
group.position.x = 2

group.add(mesh,meshT)
scene.add(group)

// AxesHelper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

// camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height); // near value is 1, and far value is 2000
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".draw"); //select the canvas element
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
}); //add the webGLRenderer
renderer.setSize(aspect.width, aspect.height); //Renderer size
renderer.render(scene, camera); //display what the camera in the scene capture
