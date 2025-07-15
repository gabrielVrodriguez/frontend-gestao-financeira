import React from 'react'
import { FaHome, FaMoneyBillWave, FaCog, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import dracma from '../../assets/images/d.svg'
import dracmaC from '../../assets/images/DracmaSvg.svg'
export default function Sidebar({ isCollapsed, setIsCollapsed }) {

  const navItems = [
    { icon: <FaHome />, name: 'Home' },
    { icon: <FaMoneyBillWave />, name: 'Financeiro' },
    { icon: <FaCog />, name: 'Configurações' },
  ];


  return (
    <div className={`bg-black-700 text-white-700 flex flex-col transition-all duration-300 ease-in-out
    ${isCollapsed ? 'w-20' : 'w-48'}`}>
      <div className="flex cursor-pointer hover:bg-white-700 rounded-2xl  duration-200 transition-all
      m-1 items-center justify-center gap-2 h-16 px-4 ">
        <span className='border-b border-gray-400'></span>
          <img src={isCollapsed ? dracma : dracmaC} className='h-30 w-auto ' alt="" />
      </div>

      <nav onClick={() => setIsCollapsed(!isCollapsed)} className='mt-5 '>
         {navItems.map((item, index) => (
            <a  key={index} >
              <div className={`flex p-4 items-center gap-2 text-white-700 cursor-pointer 
              transition-all duration-200
               hover:bg-white-700 hover:text-black-700 rounded-2xl m-1
                ${isCollapsed ? 'justify-center' : ''} `}>
                <span className='lg:text-xs xl:text-sm 2xl:text-xl font-normal  '>{item.icon}</span>
                <span className={`${isCollapsed ? 'hidden' : 'block'} lg:text-xxs xl:text-xs 2xl:text-sm font-normal `} >{item.name}</span>
              </div>

            </a>
         ))}
      </nav>



     
    </div>
  )
}
