import React from 'react'

const Search = () => {
  return (
    <>
        <input className='w-[500px] h-10 px-2 py-1 border border-gray-400 rounded-l-full' placeholder='search'/>
        <button className='px-2 h-10 py-1 border border-gray-400 bg-gray-200 rounded-r-full'>Search</button>
    </>
  )
}

export default Search