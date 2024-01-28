import React, { useEffect } from "react";
import {
  Scene,
  PerspectiveCamera,
  AmbientLight,
  WebGLRenderer,
  FogExp2,
  MeshLambertMaterial,
  PlaneGeometry,
  Mesh,
  TextureLoader,
} from "three";

const ThreeScene = () => {
  let scene, camera, renderer;
  let cloudParticles = [];

  useEffect(() => {
    const init = () => {
      scene = new Scene();
      camera = new PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 1;
      camera.rotation.x = 1.16;
      camera.rotation.y = -0.12;
      camera.rotation.z = 0.27;

      let ambient = new AmbientLight(0x555555);
      scene.add(ambient);

      // Create a texture loader
      let loader = new TextureLoader();

      // Load the texture
      loader.load("../images/cloud.png", function (texture) {
        // Create cloud material
        let cloudMaterial = new MeshLambertMaterial({
          map: texture,
          transparent: true,
        });

        // Create cloud geometry
        let cloudGeo = new PlaneGeometry(500, 500);

        // Generate and add cloud particles to the scene
        for (let p = 0; p < 50; p++) {
          let cloud = new Mesh(cloudGeo, cloudMaterial);
          cloud.position.set(
            Math.random() * 800 - 400,
            500,
            Math.random() * 500 - 500
          );
          cloud.rotation.x = 1.16;
          cloud.rotation.y = -0.12;
          cloud.rotation.z = Math.random() * 2 * Math.PI;
          cloud.material.opacity = 0.55;
          cloudParticles.push(cloud);
          scene.add(cloud);
        }

        render();
      });

      renderer = new WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      scene.fog = new FogExp2(0x03544e, 0.001);
      renderer.setClearColor(scene.fog.color);
      document.body.appendChild(renderer.domElement);
    };

    const render = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };

    init();

    // Clean up Three.js resources when the component unmounts
    return () => {
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return <div />;
};

export default ThreeScene;
