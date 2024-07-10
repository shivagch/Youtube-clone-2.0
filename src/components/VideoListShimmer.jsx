import React from 'react'

const VideoListShimmer = () => {
  return (
    <div className='flex flex-wrap'>
        {Array(12)?.fill('')?.map((_, index) => (
            <div key={index} className='bg-gray-200 h-72 w-[360px] m-2 p-2 animate-pulse'>
                <div className='h-48 bg-gray-400 rounded-md'></div>
                <p className='mt-5 h-5 bg-gray-400 rounded'></p>
                <p className='mt-2 h-5 bg-gray-400 rounded'></p>
            </div>
        ))}
    </div>
  )
}

export default VideoListShimmer