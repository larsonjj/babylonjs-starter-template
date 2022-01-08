import './style.css';

import {
  ArcRotateCamera,
  Engine,
  HemisphericLight,
  Mesh,
  MeshBuilder,
  Scene,
  Vector3,
} from 'babylonjs';
import { addLabelToMesh } from './gui';

const canvas: HTMLCanvasElement = document.getElementById(
  'renderCanvas'
) as HTMLCanvasElement;
const engine: Engine = new Engine(canvas, true);

function createScene(): Scene {
  const scene: Scene = new Scene(engine);

  const camera: ArcRotateCamera = new ArcRotateCamera(
    'Camera',
    Math.PI / 2,
    Math.PI / 2,
    2,
    Vector3.Zero(),
    scene
  );
  camera.attachControl(canvas, true);

  new HemisphericLight('light1', new Vector3(1, 1, 0), scene);

  const sphere: Mesh = MeshBuilder.CreateSphere(
    'sphere',
    { diameter: 1 },
    scene
  );

  addLabelToMesh(sphere);

  return scene;
}

const scene: Scene = createScene();

engine.runRenderLoop(() => {
  scene.render();
});
