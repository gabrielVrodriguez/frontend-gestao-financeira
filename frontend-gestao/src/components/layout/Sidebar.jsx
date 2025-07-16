import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Importe o Link
import { ThemeContext } from '../../contexts/ThemeContext';

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
    <div className={`text-black-700 bg-white-400  dark:bg-black-800 dark:text-white-300 flex flex-col transition-all duration-300 ease-in-out pb-4
    ${isCollapsed ? 'w-25' : 'w-48'}`}>
      
      <div className={`flex items-center justify-between m-1 h-16 px-4 border-b  ${isDarkMode ? 'border-black-500' : 'border-white-800' }`}>
        <div className='flex items-center'>
          <img src={dracma} className='h-10 w-auto' alt="Logo Dracma" />
          {!isCollapsed && <span className={`gradient transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>DRACMA</span>}
        </div>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className='cursor-pointer'>
          {isCollapsed ? <FaChevronRight/> : <FaChevronLeft/>}
        </button>
      </div>
      
      <div className=''>
        <nav className={`my-5 border-b w-full ${isDarkMode ? 'border-black-500' : 'border-white-800' }`}>
          {navItems.map((item, index) => (
            <Link key={index} to={item.path}>
              <div className={`flex p-4 items-center gap-2  cursor-pointer transition-all duration-200 hover:bg-white-700 hover:text-black-700 rounded-2xl m-1 ${isCollapsed ? 'justify-center' : ''}`}>
                <span className='lg:text-xs xl:text-sm 2xl:text-xl font-normal'>{item.icon}</span>
                <span className={`${isCollapsed ? 'hidden' : 'block'} lg:text-xxs xl:text-xs 2xl:text-sm font-normal`}>{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      <div className='flex-1'>
        <nav>
          {navItems2.map((item, index) => (
            <Link key={index} to={item.path}>
              <div className={`flex p-4 items-center gap-2  cursor-pointer transition-all duration-200 hover:bg-white-700 hover:text-black-700 rounded-2xl m-1 ${isCollapsed ? 'justify-center' : ''}`}>
                <span className='lg:text-xs xl:text-sm 2xl:text-xl font-normal'>{item.icon}</span>
                <span className={`${isCollapsed ? 'hidden' : 'block'} lg:text-xxs xl:text-xs 2xl:text-sm font-normal`}>{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>
             
      </div>

       <div className={`flex p-4 items-center gap-2  cursor-pointer transition-all duration-200 hover:bg-white-700 hover:text-black-700 rounded-2xl m-1 ${isCollapsed ? 'justify-center' : ''}`}>
          {isCollapsed ? (
            <span onClick={() => setIsCollapsed(!isCollapsed)}>
                {isDarkMode ? <FaSun /> : <FaMoon />}
            </span>
          ) : (
            <div className='flex gap-4 items-center'>
              <span className='lg:text-xs xl:text-sm 2xl:text-xl font-normal'>
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </span>
              <div onClick={() => setIsDarkMode(!isDarkMode)} className={`w-18 h-6 flex items-center rounded-full p-1 ${isDarkMode ? 'bg-gray-400' : 'bg-primary-400'}`}>
                <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${isDarkMode ? '' : 'translate-x-full'}`}></div>
              </div>
            </div>
          )}
        </div>
    </div>
  );
}