import type { IOptions, RecursivePartial } from "tsparticles-engine";

const options: RecursivePartial<IOptions> = {
  autoPlay: true,
  background: {
    color: {
      value: "#000"
    },
    image: "",
    position: "",
    repeat: "",
    size: "",
    opacity: 1
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff"
      },
      opacity: 1
    },
    enable: false
  },
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      resize: true
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1
      },
      bounce: {
        distance: 200
      },
      bubble: {
        distance: 200,
        duration: 0.4,
        mix: false,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: []
        }
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5
        },
        radius: 60
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1
        }
      },
      push: {
        default: true,
        groups: [],
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: []
        }
      },
      slow: {
        factor: 3,
        radius: 200
      },
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff"
            },
            stop: {
              value: "#000000"
            }
          },
          radius: 1000
        },
        shadow: {
          color: {
            value: "#000000"
          },
          length: 2000
        }
      }
    }
  },
  manualParticles: [],
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true
    }
  },
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1
        },
        value: 1
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1
        },
        value: 1
      }
    },
    collisions: {
      enable: false
    },
    color: {
      value: ["#ff00ff", "#ff58ae"],
      animation: {
        l: {
          count: 1,
          enable: true,
          offset: {
            min: 0.2,
            max: 0.8
          },
          speed: 1,
          decay: 0,
          sync: false
        }
      }
    },
    groups: {},
    move: {
      angle: {
        offset: 0,
        value: 90
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 3000,
          y: 3000
        }
      },
      center: {
        x: 50,
        y: 32,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        mode: "percent"
      },
      decay: 0,
      distance: {},
      direction: "none",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 0
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0
        },
        enable: false,
        options: {}
      },
      outModes: {
        default: "destroy",
        bottom: "destroy",
        left: "destroy",
        right: "destroy",
        top: "destroy"
      },
      random: true,
      size: true,
      speed: 4,
      spin: {
        acceleration: 0,
        enable: false
      },
      straight: false,
      trail: {
        enable: true,
        length: 3,
        fillColor: {
          value: "#000000"
        }
      },
      vibrate: false,
      warp: false
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000
      },
      limit: 300,
      value: 0
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.1
      },
      value: {
        min: 0.3,
        max: 0.8
      },
      animation: {
        count: 1,
        enable: true,
        speed: 1,
        decay: 0,
        sync: false,
        destroy: "none",
        startValue: "random"
      }
    },
    reduceDuplicates: true,
    shadow: {
      blur: 0,
      color: {
        value: "#000"
      },
      enable: false,
      offset: {
        x: 0,
        y: 0
      }
    },
    shape: {
      options: {},
      type: "circle"
    },
    size: {
      random: {
        enable: true,
        minimumValue: 1
      },
      value: {
        min: 1,
        max: 10
      },
      animation: {
        count: 0,
        enable: true,
        speed: 5,
        decay: 0,
        sync: false,
        destroy: "none",
        startValue: "random"
      }
    },
    stroke: {
      width: 0,
      color: {
        value: "",
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 0,
            decay: 0,
            sync: false
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true
          }
        }
      }
    },
    zIndex: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        sync: false
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001
        },
        value: 0,
        sync: false
      }
    },
    rotate: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false
      },
      direction: "clockwise",
      path: false
    },
    destroy: {
      bounds: {},
      mode: "none",
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 3
        },
        rate: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: {
            min: 4,
            max: 9
          }
        },
        sizeOffset: true,
        particles: {}
      }
    },
    roll: {
      darken: {
        enable: false,
        value: 0
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0
      },
      mode: "vertical",
      speed: 25
    },
    tilt: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false
      },
      direction: "clockwise",
      enable: false
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      },
      particles: {
        enable: true,
        frequency: 0.05,
        opacity: 1
      }
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: {
        angle: 50,
        move: 10
      }
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        decay: 0,
        sync: false
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 45
      },
      width: 1
    },
    links: {
      blink: false,
      color: {
        value: "#fff"
      },
      consent: false,
      distance: 100,
      enable: false,
      frequency: 1,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: "#000"
        },
        enable: false
      },
      triangles: {
        enable: false,
        frequency: 1
      },
      width: 1,
      warp: false
    },
    repulse: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1
    }
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
  emitters: {
    autoPlay: true,
    fill: true,
    life: {
      wait: false
    },
    rate: {
      quantity: 5,
      delay: 0.2
    },
    shape: "square",
    startCount: 0,
    size: {
      mode: "percent",
      height: 0,
      width: 0
    },
    direction: "none",
    particles: {},
    position: {
      x: 50,
      y: 32
    },
    spawnColor: {
      random: "random"
    }
  }
};

export default options;
