import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
const navigate = useNavigate()

  return (
    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center px-4 py-3 sm:px-20 xl:px-32'>
        <img src={assets.logo} alt="logo" className='w-32 sm:w-44' onClick={() => navigate('/')}/>
    </div>
  )
}

export default Navbar