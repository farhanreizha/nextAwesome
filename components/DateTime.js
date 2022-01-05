import { useEffect, useState } from 'react';

export default function DateTime() {
  const d = new Date(),
    h = d.getHours(),
    m = d.getMinutes(),
    s = d.getSeconds();
  const [time, setTime] = useState(`${h}h ${m}m ${s}s`);

  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds();
      setTime(`${h}h ${m}m ${s}s`);
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className='font-bold transition-all duration-300 text-4xl md:text-6xl text-white'>
      {time}
    </div>
  );
}
