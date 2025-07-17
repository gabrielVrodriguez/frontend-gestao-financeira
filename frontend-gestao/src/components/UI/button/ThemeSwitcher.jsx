// src/components/ThemeSwitcher.jsx

import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../../../contexts/ThemeContext'; // Ajuste o caminho se necessário
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeSwitcher() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  // Estilo para o container do ícone. Ajuste o tamanho conforme necessário.
  const iconStyle = "text-xl cursor-pointer text-primary-500";

  return (
    <div 
      onClick={() => setIsDarkMode(!isDarkMode)} 
      className="w-10 h-10 flex items-center border justify-center cursor-pointer border-gray-300 rounded-xl
      
      hover:bg-black-700 dark:hover:bg-white-700 transition-colors duration-300 " // Garante que a área de clique seja fixa
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          // A 'key' é CRUCIAL. Ela diz ao AnimatePresence que o componente mudou.
          key={isDarkMode ? 'moon' : 'sun'}
          
          // Animação de entrada
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          
          // Animação de saída
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          
          // Duração da transição
          transition={{ duration: 0.3 }}
        >
          {isDarkMode ? (
            <FaMoon className={iconStyle} />
          ) : (
            <FaSun className={iconStyle} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}