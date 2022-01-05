export const particlesConfig = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1080,
      },
    },
    color: {
      value: '#a4a4a4',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#a4a4a4',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: '',
        width: 100,
        height: 100,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 20,
        opacity_min: 0,
        sync: true,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        opacity_min: 0,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: '#ffffff',
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 3000,
        rotateY: 3000,
      },
    },
    array: [],
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 200,
        size: 80,
        duration: 0.4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
      mouse: {},
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors: {},
    },
    tmp: {},
  },
};
