import DateTime from '../components/DateTime';
import Search from '../components/Search';
import Favorit from '../components/Favorit';
import { useEffect, useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import Particle from '../components/Particle';

export default function Home() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 2000);
  });
  return (
    <div className='flex flex-col gap-y-5 text-white justify-center items-center h-screen bg-gradient-to-tr from-gray-900 via-slate-800 to-slate-700'>
      {load ? (
        <>
          <Particle />
          <DateTime />
          <Search />
          <Favorit />
        </>
      ) : (
        <div className='flex gap-x-4 text-center text-4xl md:text-6xl text-white'>
          <ImSpinner9 className='animate-spin' /> Loading...
        </div>
      )}
    </div>
  );
}
