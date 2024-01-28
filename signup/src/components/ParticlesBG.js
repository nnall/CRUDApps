import { Particles } from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
// import { loadFull } from "tsparticles";
import particlesConfig from "./particles-config";
import particlesConfig2 from "./particles-config2";
import particlesConfigStars from "./particles-config-stars";
const configFile = "./particlesjs-config.json";

const particlesInit = async (main) => {
  await loadSlim(main);
};

const particlesLoaded = (container) => {
  console.log(container);
};

// uninstall

const ParticlesBG = () => {
  return (
    <Particles
      id="tsparticles"
      //   url="https://particles.js.org/samples/presets/stars.html"
      init={particlesInit}
      loaded={particlesLoaded}
      //   init={(main) => particlesInit(main)}
      //   loaded={(container) => particlesLoaded(container)}
      options={particlesConfigStars}
    />
  );
};

export default ParticlesBG;
