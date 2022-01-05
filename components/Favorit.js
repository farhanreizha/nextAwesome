import { FaYoutube, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
export default function Favorit() {
  return (
    <div className='flex text-4xl md:text-6xl z-50 md:z-50 space-x-4'>
      <a className='text-red-500 transition-all duration-300 hover:text-5xl md:hover:text-7xl' href='https://www.youtube.com'>
        <FaYoutube />
      </a>
      <a
        className='text-green-500 transition-all duration-300 hover:text-5xl md:hover:text-7xl'
        href='https://web.whatsapp.com'
      >
        <FaWhatsapp />
      </a>
      <a
        className='text-blue-600 transition-all duration-300 hover:text-5xl md:hover:text-7xl'
        href='https://www.facebook.com'
      >
        <FaFacebook />
      </a>
      <a className='transition-all duration-300 hover:text-5xl md:hover:text-7xl' href='https://www.instagram.com'>
        <FaInstagram />
      </a>
    </div>
  );
}
