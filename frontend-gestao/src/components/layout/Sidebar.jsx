import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Importe o Link
import { ThemeContext } from '../../contexts/ThemeContext';
import ThemeSwitcher from '../UI/button/ThemeSwitcher';
// Ícones novos adicionados para a nova seção
import { FaHome, FaMoneyBillWave, FaCog, FaChevronLeft, FaChevronRight, FaQuestionCircle, FaSun, FaMoon } from 'react-icons/fa';
import dracma from '../../assets/images/d.svg';

export default function Sidebar({ isCollapsed, setIsCollapsed }) {
  const {isDarkMode, setIsDarkMode} = useContext(ThemeContext);

  const navItems = [
    { icon: <FaHome />, name: 'Home', path:'/homePage' },
    { icon: <FaMoneyBillWave />, name: 'Financeiro', path: '/finance' },
  ];

  const navItems2 = [
    { icon: <FaCog />, name: 'Configuração' },
    { icon: <FaQuestionCircle />, name: 'Ajuda' },
  ];

  return (
    <div className={`style-secondary flex flex-col transition-all  duration-300 ease-in-out pb-4
    ${isCollapsed ? 'w-20' : 'w-40'}`}>
      
      <div className={`flex items-center justify-between m-1 h-16 px-2 border-b  ${isDarkMode ? 'border-black-500' : 'border-white-800' }`}>
        <div className='flex items-center'>
          <img src={dracma} className='h-10 w-auto' alt="Logo Dracma" />
          {!isCollapsed && <span className={`gradient transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>DRACMA</span>}
        </div>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className='cursor-pointer'>
          {isCollapsed ? <FaChevronRight/> : <FaChevronLeft/>}
        </button>
      </div>
      
      <div className={` border-b w-full ${isDarkMode ? 'border-black-500' : 'border-white-800' }`}>
        <nav className={`mt-5  mb-3`}>
          {navItems.map((item, index) => (
            <Link key={index} to={item.path}>
              <div className={`flex p-2 items-center gap-2  cursor-pointer transition-all duration-200 hover:bg-white-700 hover:text-black-700 rounded-xl m-1 ${isCollapsed ? 'justify-center' : ''}`}>
                <span className='lg:text-xxs xl:text-xs 2xl:text-sm font-normal'>{item.icon}</span>
                <span className={`${isCollapsed ? 'hidden' : 'block'} lg:text-xxs xl:text-xs 2xl:text-sm font-normal`}>{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      <div className='flex-1 mt-4'>
        <nav>
          {navItems2.map((item, index) => (
            <Link key={index} to={item.path}>
             <div className={`flex p-2 items-center gap-2  cursor-pointer transition-all duration-200 hover:bg-white-700 hover:text-black-700 rounded-xl m-1 ${isCollapsed ? 'justify-center' : ''}`}>
                <span className='lg:text-xxs xl:text-xs 2xl:text-sm font-normal'>{item.icon}</span>
                <span className={`${isCollapsed ? 'hidden' : 'block'} lg:text-xxs xl:text-xs 2xl:text-sm font-normal`}>{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>
             
      </div>

      <div className={`flex p-4  items-center ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}