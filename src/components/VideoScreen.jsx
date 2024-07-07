import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { hideMenu } from '../utils/menuSlice';

const VideoScreen = () => {
    const [searchParams] = useSearchParams();

    const v = searchParams.get('v')

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(hideMenu())
    }, [])
    
  return (
    <iframe width="1000" height="600" src={`https://www.youtube.com/embed/${v}`} title="2.5 Years Experienced React JS Interview  | Chakde Frontend Interview EP - 10" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  )
}

export default VideoScreen