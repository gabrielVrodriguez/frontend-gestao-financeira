import { useState, useContext } from 'react'
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
import ProtectedRoute from './components/auth/ProtectedRoutes.jsx';

function AppLayout() {
  const { isDarkMode } = useContext(ThemeContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`flex min-h-screen style-default`}>
      {isAuthenticated && (
        <SideBar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      )}

      <main className={`
        flex-1 
        transition-all duration-300 
        h-screen
        style-default 
        p-6
        ${!isAuthenticated ? 'ml-0' : isCollapsed ? 'ml-2' : 'ml-5'} 
      `}>
        <div className="h-full p-2" >
          <Routes>
            <Route path='/access' element={<AccessPage />} />

            <Route
              path='/homePage'
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <HomePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="*"
              element={
                <Navigate to={isAuthenticated ? "/homePage" : "/access"} replace />
              }
            />
          </Routes>
        </div>
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
