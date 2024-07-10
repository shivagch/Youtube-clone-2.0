import React from 'react'

const SearchResultsShimmer = () => {
  return (
        <div>
            {Array(5)?.fill('')?.map((_, index) => (
                <div key={index} className='bg-gray-200 h-72 w-full m-2 p-2 animate-pulse'>
                    <div className='h-56 w-96 bg-gray-400 rounded-md'></div>
                    <p className='mt-5 h-5 bg-gray-400 rounded'></p>
                    <p className='mt-2 h-5 bg-gray-400 rounded'></p>
                </div>
            ))}
        </div>
  )
}

export default SearchResultsShimmer