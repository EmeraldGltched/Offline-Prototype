var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var position = { 
  x: 0, 
  y: 2, 
  z: 0 
};

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

// Block config
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

function createCoalOre(x, y, z) {
  var coalOreGeometry = new THREE.BoxGeometry(1, 1, 1);
  var coalOreMaterials =
      [
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/coal_ore/coal_ore.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/coal_ore/coal_ore.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/coal_ore/coal_ore.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/coal_ore/coal_ore.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/coal_ore/coal_ore.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/coal_ore/coal_ore.png'), side: THREE.DoubleSide})
      ]

  var coalOreMaterial = new THREE.MeshFaceMaterial(coalOreMaterials);
  var coalOre = new THREE.Mesh(coalOreGeometry, coalOreMaterial);
  
  scene.add(coalOre);
  
  coalOre.position.x = x;
  coalOre.position.y = y;
  coalOre.position.z = z;
}

function createBedrock(x, y, z) {
  var bedrockGeometry = new THREE.BoxGeometry(1, 1, 1);
  var bedrockMaterials =
      [
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/bedrock/bedrock.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/bedrock/bedrock.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/bedrock/bedrock.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/bedrock/bedrock.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/bedrock/bedrock.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/bedrock/bedrock.png'), side: THREE.DoubleSide})
      ]

  var bedrockMaterial = new THREE.MeshFaceMaterial(bedrockMaterials);
  var bedrock = new THREE.Mesh(bedrockGeometry, bedrockMaterial);
  
  scene.add(bedrock);
  
  bedrock.position.x = x;
  bedrock.position.y = y;
  bedrock.position.z = z;
}

// Block creation
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
createDirt(0, -1, 0);
createDirt(1, -1, 0);
createDirt(-1, -1, 0);
createDirt(0, -1, 1);
createDirt(0, -1, -1);
createDirt(1, -1, -1);
createDirt(-1, -1, -1);
createDirt(-1, -1, 1);
createDirt(1, -1, 1);
createDirt(-2, -1, 1);
createDirt(-2, -1, 0);
createDirt(-2, -1, -1);
createDirt(-2, -1, -2);
createDirt(-1, -1, -2);
createDirt(0, -1, -2);
createDirt(1, -1, -2);
createDirt(2, -1, -2);
createDirt(2, -1, -3);
createDirt(2, -1, -4);
createDirt(1, -1, -5);
createDirt(1, -1, -4);
createDirt(1, -1, -3);
createDirt(0, -1, -3);
createDirt(0, -1, -4);
createDirt(0, -1, -5);
createDirt(-1, -1, -5);
createDirt(-1, -1, -4);
createDirt(-1, -1, -3);
createDirt(-2, -1, -5);
createDirt(-2, -1, -4);
createDirt(-2, -1, -3);
createDirt(0, -2, 0);
createDirt(1, -2, 0);
createDirt(-1, -2, 0);
createDirt(0, -2, 1);
createDirt(0, -2, -1);
createDirt(1, -2, -1);
createDirt(-1, -2, -1);
createDirt(-1, -2, 1);
createDirt(1, -2, 1);
createDirt(-2, -2, 1);
createDirt(-2, -2, 0);
createDirt(-2, -2, -1);
createDirt(-2, -2, -2);
createDirt(-1, -2, -2);
createDirt(0, -2, -2);
createDirt(1, -2, -2);
createDirt(2, -2, -2);
createDirt(2, -2, -3);
createDirt(2, -2, -4);
createDirt(1, -2, -5);
createDirt(1, -2, -4);
createDirt(1, -2, -3);
createDirt(0, -2, -3);
createDirt(0, -2, -4);
createDirt(0, -2, -5);
createDirt(-1, -2, -5);
createDirt(-1, -2, -4);
createDirt(-1, -2, -3);
createDirt(-2, -2, -5);
createDirt(-2, -2, -4);
createDirt(-2, -2, -3);

createBedrock(0, -3, 0);
createBedrock(1, -3, 0);
createBedrock(-1, -3, 0);
createBedrock(0, -3, 1);
createBedrock(0, -3, -1);
createBedrock(1, -3, -1);
createBedrock(-1, -3, -1);
createBedrock(-1, -3, 1);
createBedrock(1, -3, 1);
createBedrock(-2, -3, 1);
createBedrock(-2, -3, 0);
createBedrock(-2, -3, -1);
createBedrock(-2, -3, -2);
createBedrock(-1, -3, -2);
createBedrock(0, -3, -2);
createBedrock(1, -3, -2);
createBedrock(2, -3, -2);
createBedrock(2, -3, -3);
createBedrock(2, -3, -4);
createBedrock(1, -3, -5);
createBedrock(1, -3, -4);
createBedrock(1, -3, -3);
createBedrock(0, -3, -3);
createBedrock(0, -3, -4);
createBedrock(0, -3, -5);
createBedrock(-1, -3, -5);
createBedrock(-1, -3, -4);
createBedrock(-1, -3, -3);
createBedrock(-2, -3, -5);
createBedrock(-2, -3, -4);
createBedrock(-2, -3, -3);

createTurtle(0, 1, 0);
createTurtle(1, 2, -4);

// Scene updates
camera.position.y = 3;
camera.position.z = 7;

camera.target = new THREE.Vector3(position);

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
