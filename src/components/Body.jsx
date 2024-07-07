import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid grid-flow-col h-screen'>
      <Sidebar />
      <div className='col-span-11'>
        <Outlet />
      </div>
    </div>
  )
}

export default Body