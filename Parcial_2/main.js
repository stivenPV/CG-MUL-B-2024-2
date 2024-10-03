
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const controls = new THREE.OrbitControls(camera, renderer.domElement);


const cubeCount = Math.floor(Math.random() * 5) + 1; 
const distance = 2; 

for (let i = 0; i < cubeCount; i++) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = i * distance; 
    scene.add(cube);
}


camera.position.z = 5;


function animate() {
    requestAnimationFrame(animate);
    controls.update(); 
    renderer.render(scene, camera);
}


window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


animate();
