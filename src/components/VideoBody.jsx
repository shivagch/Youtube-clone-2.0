import React from 'react'
import VideoScreen from './VideoScreen'
import CommentsList from './CommentsList'

const VideoBody = () => {
  return (
    <div className='m-1 p-1 border border-white'>
        <div>
            <VideoScreen />
            <CommentsList />
        </div>

    </div>
  )
}

export default VideoBody