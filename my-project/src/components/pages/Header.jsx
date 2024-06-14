import React from 'react'
import { baseImgUrl } from '../helpers/functions-general'
import { LuLogOut } from 'react-icons/lu'

const Header = () => {
  return (
    <div>
      <header className="header mb-5">
        <div className="container">
            <div className="header__wrapper">
                <img src={`${baseImgUrl}/logo.svg`} alt="" />
                <h2 className='uppercase'>Human Resource information System</h2>
                <div className='flex items-center gap-5'>
                  <img src="http://via.placeholder.com/50x50" alt="" className='rounded-full' />
                  <div className="name">
                    <h2>Louren Isobel Rubico</h2>
                  <h3>Web Developer</h3>
                  </div>
                <span className='border-[1px] border-primary h-[3rem]'></span>
                <span className='border-[2px] p-2 hover:bg-primary hover:text-white rounded-md'><LuLogOut className='text-xl mx-auto'/></span>
                </div>  
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
