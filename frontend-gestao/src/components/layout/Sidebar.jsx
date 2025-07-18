import React, { useContext } from 'react';
// 1. Importe 'useLocation' para saber a rota ativa
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import ThemeSwitcher from '../UI/button/ThemeSwitcher';
import { FaHome, FaMoneyBillWave, FaCog, FaChevronLeft, FaChevronRight, FaQuestionCircle } from 'react-icons/fa';
import dracma from '../../assets/images/d.svg';

export default function Sidebar({ isCollapsed, setIsCollapsed }) {
  const { isDarkMode } = useContext(ThemeContext);
  const location = useLocation();

  const navItems = [
    { icon: <FaHome />, name: 'Home', path: '/homePage' },
    { icon: <FaMoneyBillWave />, name: 'Financeiro', path: '/finance' },
  ];

  // 3. Adicione a propriedade 'path' aos itens da segunda lista
  const navItems2 = [
    { icon: <FaCog />, name: 'Configuração', path: '/settings' },
    { icon: <FaQuestionCircle />, name: 'Ajuda', path: '/help' },
  ];

  // Função auxiliar para criar os links e evitar repetição de código
  const renderNavLinks = (items) => {
    return items.map((item, index) => {
      const isActive = location.pathname === item.path;

      return (
        <Link key={index} to={item.path}>
          <div
            className={`flex p-2 items-center gap-2 cursor-pointer transition-all duration-200 rounded-sm m-1 ${
              isCollapsed ? 'justify-center' : ''
            } ${
              isActive
                ? 'bg-primary-500 text-gray-900' 
                : 'hover:bg-gray-500 hover:text-white'
            }`}
          >
            <span className='lg:text-sm 2xl:text-xl'>{item.icon}</span>
            <span className={`${isCollapsed ? 'hidden' : 'block'} lg:text-xxs xl:text-xs 2xl:text-sm font-normal`}>
              {item.name}
            </span>
          </div>
        </Link>
      );
    });
  };

  return (
    <div className={`style-secondary flex flex-col  shadow-lg  ease-in-out pb-4 ${isCollapsed ? 'w-20' : 'w-40'}`}>
      <div className={`flex items-center justify-between m-1 h-16 mx-2 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className='flex items-center'>
          <img src={dracma} className='h-10 w-auto' alt="Logo Dracma" />
          {!isCollapsed && <span className={`gradient transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>DRACMA</span>}
        </div>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className='cursor-pointer'>
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      <div className={`m-2  border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <nav className="mt-5 mb-3 ">{renderNavLinks(navItems)}</nav>
      </div>

      <div className="flex-1  mt-4">
        <nav>{renderNavLinks(navItems2)}</nav>
      </div>

      <div className={`flex p-4 items-center ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}