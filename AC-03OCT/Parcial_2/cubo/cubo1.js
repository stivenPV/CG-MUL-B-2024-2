const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const numberOfCubes = Math.floor(Math.random() * 5) + 1;

const cubeSpacing = 2; 
for (let i = 0; i < numberOfCubes; i++) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    
    // Activamos el wireframe para que solo se vean las líneas de la malla
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);

    cube.position.x = (i - (numberOfCubes - 1) / 2) * cubeSpacing;
    scene.add(cube);
}

camera.position.z = 5;

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
    scene.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
            child.rotation.x += 0.01;
            child.rotation.y += 0.01;
        }
    });

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
