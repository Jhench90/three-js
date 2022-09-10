import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import * as THREE from 'three';

function App() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(50, 50, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  const cube2 = new THREE.Mesh(geometry, material);
  scene.add(cube);
  scene.add(cube2);

  cube.position.z = 10;
  cube2.position.z = 0;

  camera.position.z = 60;

  const directionalLight = new THREE.DirectionalLight('blue', 0.5);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.002;

    cube2.rotation.x += 0.002;
    cube2.rotation.y += 0.004;
    renderer.render(scene, camera);
  }

  animate();

  return (
    <div className="App">

    </div>
  );
}

export default App;
