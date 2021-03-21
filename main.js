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

function createGrassBlock(x, y, z) {
  var grassBlockGeometry = new THREE.BoxGeometry(1, 1, 1);
  var grassBlockMaterials =
      [
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/grass_block/grass_block_side.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/grass_block/grass_block_side.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/grass_block/grass_block_top.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/dirt/dirt.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/grass_block/grass_block_side.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/grass_block/grass_block_side.png'), side: THREE.DoubleSide})
      ]

  var grassBlockMaterial = new THREE.MeshFaceMaterial(grassBlockMaterials);
  var grass_block = new THREE.Mesh(grassBlockGeometry, grassBlockMaterial);
  
  scene.add(grass_block);
  
  grass_block.position.x = x;
  grass_block.position.y = y;
  grass_block.position.z = z;
}

function createDirt(x, y, z) {
  var dirtGeometry = new THREE.BoxGeometry(1, 1, 1);
  var dirtMaterials =
      [
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/dirt/dirt.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/dirt/dirt.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/dirt/dirt.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/dirt/dirt.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/dirt/dirt.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/dirt/dirt.png'), side: THREE.DoubleSide})
      ]

  var dirtMaterial = new THREE.MeshFaceMaterial(dirtMaterials);
  var dirt = new THREE.Mesh(dirtGeometry, dirtMaterial);
  
  scene.add(dirt);
  
  dirt.position.x = x;
  dirt.position.y = y;
  dirt.position.z = z;
}

function createTurtle(x, y, z) {
  var turtleGeometry = new THREE.BoxGeometry(1, 1, 1);
  var turtleMaterials =
      [
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/turtle/color.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/turtle/color.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/turtle/color.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/turtle/color.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/turtle/color.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/turtle/color.png'), side: THREE.DoubleSide})
      ]

  var turtleMaterial = new THREE.MeshFaceMaterial(turtleMaterials);
  var turtle = new THREE.Mesh(turtleGeometry, turtleMaterial);
  
  scene.add(turtle);
  
  turtle.position.x = x;
  turtle.position.y = y;
  turtle.position.z = z;
}

createGrassBlock(0, 0, 0); // Turtle
createGrassBlock(1, 0, 0);
createGrassBlock(0, 0, 1);
createGrassBlock(-1, 0, 0);
createGrassBlock(0, 0, -1);
createGrassBlock(1, 0, 1);
createGrassBlock(-1, 0, 1);
createGrassBlock(-1, 0, -1);
createGrassBlock(1, 0, -1);
createGrassBlock(-2, 0, 1);
createGrassBlock(-2, 0, 0);
createGrassBlock(-2, 0, -1);
createGrassBlock(-2, 0, -2);
createGrassBlock(-2, 0, -3);
createGrassBlock(-1, 0, -3);
createGrassBlock(-1, 0, -2);
createGrassBlock(0, 0, -2);
createGrassBlock(2, 0, -2);
createGrassBlock(1, 1, -2);
createGrassBlock(1, 1, -3);
createGrassBlock(2, 1, -3);
createGrassBlock(2, 1, -4);
createGrassBlock(1, 1, -4); // Turtle
createGrassBlock(1, 1, -5);
createGrassBlock(0, 1, -5);
createGrassBlock(0, 1, -4);
createGrassBlock(0, 1, -3);
createGrassBlock(-1, 1, -4);
createGrassBlock(-2, 1, -4);
createGrassBlock(-2, 2, -5);
createGrassBlock(-1, 2, -5);

createDirt(2, 0, -4);
createDirt(2, 0, -3);
createDirt(1, 0, -2);
createDirt(1, 0, -3);
createDirt(1, 0, -4);
createDirt(1, 0, -5);
createDirt(0, 0, -3);
createDirt(0, 0, -4);
createDirt(0, 0, -5);
createDirt(-1, 0, -4);
createDirt(-2, 0, -4);
createDirt(-2, 0, -5);
createDirt(-1, 0, -5);
createDirt(-1, 1, -5);
createDirt(-2, 1, -5);

createTurtle(0, 1, 0);
createTurtle(1, 2, -4);

camera.position.y = 3;
camera.position.z = 7;

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
