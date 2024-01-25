import {TfiSearch} from 'react-icons/tfi'

const SearchBar = () => {
  return (
    <div className="px-3 py-2 mx-3 w-full flex items-center bg-gray-100 rounded-3xl">
        <input type="search" placeholder='Search...'  className='ml-2 outline-none text-black bg-transparent'/>
        <TfiSearch size={30} className='text-gray-900 py-2'/>
    </div>
  )
}

export default SearchBar