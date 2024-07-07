import React from 'react'

const Video = ({video}) => {
  return (
    <div className='border border-gray-200 shadow rounded-md'>
        <img className='h-72 rounded-t-md' src={video?.snippet?.thumbnails?.high?.url} alt='video-image-thumbnail' />
        <div className='p-1'>
            <p className='text-md font-bold'>{video?.snippet?.title}</p>
            <p className='text-sm text-gray-600'>{video?.snippet?.channelTitle}</p>
            <p className='text-sm text-gray-600'>{video?.statistics?.viewCount} views . {video?.statistics?.likeCount} likes</p>
        </div>
    </div>
  )
}

export default Video