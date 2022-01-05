import Particles from 'react-tsparticles';
import { particlesConfig } from '../assets/particlesConfig';

export default function Particle() {
  return (
    <Particles
      params={particlesConfig}
      className='absolute top-0 bottom-0 left-0 right-0'
    />
  );
}
