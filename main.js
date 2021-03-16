var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix(update);
});

controls = new THREE.OrbitControls(camera, renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var cubeMaterials =
    [
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/grass_block/grass_block_side.png'), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/grass_block/grass_block_side.png'), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/grass_block/grass_block_top.png'), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/dirt/dirt.png'), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/grass_block/grass_block_side.png'), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/grass_block/grass_block_side.png'), side: THREE.DoubleSide})
    ]

var material = new THREE.MeshFaceMaterial(cubeMaterials);
var grass_block = new THREE.Mesh(geometry, material);

scene.add(grass_block);

camera.position.z = 5;

var update = function() {
  //cube.rotation.y += 0.005;
};

var render = function() {
  renderer.render(scene, camera);
};

var GameLoop = function() {
  requestAnimationFrame(GameLoop);
  
  update();
  render();
};

GameLoop();
