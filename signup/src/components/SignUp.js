// import React, { useEffect } from "react";
// import * as THREE from "three";

// const ThreeScene = () => {
//   useEffect(() => {
//     let scene, camera, renderer;
//     let texture;

//     const init = () => {
//       scene = new THREE.Scene();
//       camera = new THREE.PerspectiveCamera(
//         60,
//         window.innerWidth / window.innerHeight,
//         1,
//         1000
//       );
//       camera.position.z = 1;
//       camera.rotation.x = 1.16;
//       camera.rotation.y = -0.12;
//       camera.rotation.z = 0.27;

//       let ambient = new THREE.AmbientLight(0x555555);
//       scene.add(ambient);

//       renderer = new THREE.WebGLRenderer();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       scene.fog = new THREE.FogExp2(0x03544e, 0.001);
//       renderer.setClearColor(scene.fog.color);
//       document.body.appendChild(renderer.domElement);

//       let loader = new THREE.TextureLoader();

//       loader.load("../images/cloud.png", function (loadedTexture) {
//         texture = loadedTexture;

//         let cloudGeo = new THREE.PlaneGeometry(500, 500);
//         let cloudMaterial = new THREE.MeshLambertMaterial({
//           map: texture,
//           transparent: true,
//         });

//         for (let p = 0; p < 50; p++) {
//           let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
//           cloud.position.set(
//             Math.random() * 800 - 400,
//             500,
//             Math.random() * 500 - 500
//           );
//           cloud.rotation.x = 1.16;
//           cloud.rotation.y = -0.12;
//           cloud.rotation.z = Math.random() * 2 * Math.PI;
//           cloud.material.opacity = 0.55;
//           scene.add(cloud);
//         }
//       });

//       render();
//     };

//     const render = () => {
//       renderer.render(scene, camera);
//       requestAnimationFrame(render);
//     };

//     init();

//     // Clean up Three.js resources when the component unmounts
//     return () => {
//       if (renderer) {
//         renderer.dispose();
//       }
//     };
//   }, []);

//   return null; // This component doesn't render any React elements, so return null.
// };

// export default ThreeScene;
import React, { useEffect } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  useEffect(() => {
    let scene,
      camera,
      renderer,
      cloudParticles = [];
    let texture;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        80,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 1;
      camera.rotation.x = 1.16;
      camera.rotation.y = -0.12;
      camera.rotation.z = 0.27;

      let ambient = new THREE.AmbientLight(0x11111);
      scene.add(ambient);

      let directionalLight = new THREE.DirectionalLight(0xf2f2a5);
      directionalLight.position.set(0, 0, 2);
      directionalLight.intensity = 8; // Adjust the intensity
      scene.add(directionalLight);

      let orangeLight = new THREE.PointLight(0xcc6600, 50, 450, 1.7);
      orangeLight.position.set(200, 300, 100);
      orangeLight.intensity = 5; // Adjust the intensity
      scene.add(orangeLight);

      let redLight = new THREE.PointLight(0xd8547e, 50, 450, 1.7);
      redLight.position.set(100, 300, 100);
      redLight.intensity = 5; // Adjust the intensity
      scene.add(redLight);

      let blueLight = new THREE.PointLight(0x3677ac, 50, 450, 1.7);
      blueLight.position.set(300, 300, 200);
      blueLight.intensity = 5; // Adjust the intensity
      scene.add(blueLight);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      scene.fog = new THREE.FogExp2(0x0f1822, 0.0005);
      renderer.setClearColor(scene.fog.color);
      document
        .getElementById("three-container")
        .appendChild(renderer.domElement);

      let loader = new THREE.TextureLoader();

      loader.load("/images/cloud2.png", function (loadedTexture) {
        texture = loadedTexture;

        let cloudGeo = new THREE.PlaneGeometry(200, 200);
        let cloudMaterial = new THREE.MeshLambertMaterial({
          map: texture,
          transparent: true,
        });

        for (let p = 0; p < 50; p++) {
          let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
          cloud.position.set(
            Math.random() * 800 - 400,
            500,
            Math.random() * 400 - 500
          );
          cloud.rotation.x = 1.16;
          cloud.rotation.y = -0.12;
          cloud.rotation.z = Math.random() * Math.PI;
          cloud.material.opacity = 0.125;
          cloudParticles.push(cloud);
          scene.add(cloud);
        }
      });

      render();
    };

    const render = () => {
      cloudParticles.forEach((p) => {
        p.rotation.z -= 0.0025;
      });
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

  return (
    <>
      <div id="three-container"></div>
      <div className="page_content">
        <h1>hello</h1>
      </div>
    </>
  );
};

export default ThreeScene;
