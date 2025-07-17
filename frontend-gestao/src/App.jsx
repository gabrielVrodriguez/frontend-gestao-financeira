import { useState, useContext  } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext.jsx'; 

import AccessPage from './pages/AccessPage.jsx'
import HomePage from './pages/HomePage.jsx'
import SideBar from './components/layout/Sidebar.jsx'

function AppLayout () {
  const { isDarkMode } = useContext(ThemeContext);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`flex min-h-screen style-default`}>
      {isAuthenticated && (
        <SideBar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      )}
      
      {/* O conteúdo principal da sua aplicação */}
      <main className={`
        flex-1 
        transition-all duration-300 style-default
        ${!isAuthenticated ? 'pl-0' : isCollapsed ? 'pl-10' : 'pl-20'}
      `}>
        <Routes>
          <Route path='/access' element={<AccessPage />} />
          <Route path='/homePage' element={<HomePage />} />
          {/* Adicione outras rotas aqui */}
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppLayout />
      </ThemeProvider>
    </BrowserRouter>
  );
}


export default App
