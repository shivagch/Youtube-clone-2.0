import React from 'react'
import VideoScreen from './VideoScreen'
import CommentsList from './CommentsList'
import LiveChat from './LiveChat'

const VideoBody = () => {
  return (
    <div className='m-1 p-1 border border-white flex'>
        <div>
            <VideoScreen />
            <CommentsList />
        </div>
        <div>   
            <LiveChat />
        </div>
    </div>
  )
}

export default VideoBody