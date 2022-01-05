import { FaSearch } from 'react-icons/fa';
export default function Search() {
  return (
    <form method='GET' action='https://duckduckgo.com/?q=%s'>
      <label className='relative block'>
        <span className='sr-only'>Search</span>
        <button
          type='submit'
          className='absolute transition-all duration-300 inset-y-0 right-8 md:right-10 text-gray-400 '
        >
          <FaSearch />
        </button>
        <input
          className='block bg-[#2f3640] transition-all duration-300 py-4 px-7 h-16 w-72 md:w-96 md:py-5 md:px-10 rounded-full focus:outline-none -inset-0'
          placeholder='Search Here'
          type='text'
          name='q'
        />
      </label>
    </form>
  );
}
