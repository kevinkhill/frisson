import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

import type { ParticleOptions } from "../lib/types";

export default function MyParticles({ options }: { options?: ParticleOptions }) {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />
  );
}

// export default class ParticlesContainer extends React.PureComponent {
//   // this customizes the component tsParticles installation
//   async customInit(engine: Engine): Promise<void> {
//     // this adds the preset to tsParticles, you can safely use the
//     await loadSeaAnemonePreset(engine);
//   }

//   render() {
//     const options = {
//       preset: "seaAnemone"
//     };

//     return <Particles id="tsparticles" options={options} init={this.customInit} />;
//   }
// }
