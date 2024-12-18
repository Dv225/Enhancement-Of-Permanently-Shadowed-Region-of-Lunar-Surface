const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('space-container').appendChild(renderer.domElement);

// Create space background
const textureLoader = new THREE.TextureLoader();
const spaceTexture = textureLoader.load('/static/images/backg.png');
scene.background = spaceTexture;

// Create the moon (with a double-sided material to fix the black gap)
const moonTexture = textureLoader.load('/static/images/beautiful-glowing-gray-full-moon.png');
const moonGeometry = new THREE.SphereGeometry(4, 32, 32); // Increased size (radius = 3)
const moonMaterial = new THREE.MeshStandardMaterial({
    map: moonTexture,
    side: THREE.DoubleSide // Make sure both sides of the sphere are rendered
});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
scene.add(moon);


// Add some light to illuminate the scene
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Position the camera to better fit the larger moon
camera.position.z = 10; // Adjusted camera position to fit the larger moon

// Resize handling
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate the moon horizontally
    moon.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();