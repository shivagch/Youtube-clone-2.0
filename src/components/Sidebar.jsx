import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { showMenu } = useSelector((state) => state.menu)

  if(!showMenu) return null;

  return (
    <div className='col-span-1 border border-gray-200 shadow p-2'>
      <div className='m-1'>
        <Link to='/'><p  className='mx-1 font-bold cursor-pointer'>Home</p></Link>
        <p className='mx-1 font-bold'>Explore</p>
        <p className='mx-1 font-bold'>Subscriptions</p>
        <p className='mx-1 font-bold'>Library</p>
      </div>
      <div className='m-1'>
        <p className='mx-1 font-bold'>History</p>
        <p className='mx-1 font-bold'>Your Videos</p>
        <p className='mx-1 font-bold'>Watch Later</p>
        <p className='mx-1 font-bold'>Playlist</p>
      </div>
      <div className='m-1'>
        <p className='mx-1 font-bold'>More from Youtube</p>
        <p className='mx-1 font-bold'>Settings</p>
        <p className='mx-1 font-bold'>Help</p>
        <p className='mx-1 font-bold'>Send feedback</p>
      </div>
    </div>
  )
}

export default Sidebar