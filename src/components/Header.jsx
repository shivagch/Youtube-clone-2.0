import React from 'react'
import Search from './Search'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/menuSlice'
import { Link } from 'react-router-dom'

const Header = () => {

  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='m-2, p-2 grid grid-flow-col shadow'>
      <div className='col-span-1 flex'>
        <img className='h-8 w-8 m-2' onClick={handleToggleMenu} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" alt="menu" />
        <Link to="/"><img className='h-8 m-2' alt='logo' src='https://www.clipartmax.com/png/small/294-2941508_youtube-icon-youtube-logo-png.png' /></Link>
      </div>
      <div className="col-span-10 m-2 text-center">
        <Search />
      </div>
      <div className='col-span-1 m-2'>
        <img className='h-8 w-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="logo" />
      </div>
    </div>
  )
}

export default Header