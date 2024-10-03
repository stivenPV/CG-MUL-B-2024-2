// Configuración de la escena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Configuración de OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Generar entre 1 y 5 cubos aleatorios
const cubeCount = Math.floor(Math.random() * 5) + 1; // Genera un número aleatorio entre 1 y 5
const distance = 2; // Distancia entre los cubos

for (let i = 0; i < cubeCount; i++) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = i * distance; // Alinear horizontalmente
    scene.add(cube);
}

// Posicionar la cámara
camera.position.z = 5;

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Actualizar controles
    renderer.render(scene, camera);
}

// Ajustar el tamaño del canvas al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Iniciar la animación
animate();
