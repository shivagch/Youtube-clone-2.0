import { useEffect, useState } from 'react'
import { YOUTUBE_LIST_API } from '../utils/constants'
import Video from './Video';
import { Link } from 'react-router-dom';

const VideoList = () => {
  const [videoList, setVideoList] = useState([]); 

  useEffect(() => {
    getVideoListData();
  }
  , []);

  const getVideoListData = async () => {
    try {
      const response = await fetch(YOUTUBE_LIST_API);
      const data = await response.json();
      setVideoList(data.items);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='grid grid-cols-4 gap-4'>
      {videoList?.map((video) => (
        <Link  key={video.id} to={`/watch?v=${video.id}`}><Video video={video} /></Link>
      ))
    }
    </div>
  )
}

export default VideoList