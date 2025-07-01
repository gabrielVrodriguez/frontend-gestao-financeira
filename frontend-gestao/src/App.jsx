import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AccessPage from './pages/AccessPage.jsx'
import HomePage from './pages/HomePage.jsx'
import SideBar from './components/layout/Sidebar.jsx'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <>
      <BrowserRouter>
        

          <div className='min-h-screen'>
            {isAuthenticated && (
              <SideBar
              />
            )}



            <div className={`gridTemplate p-4 transition-all duration-300 ${isSidebarCollapsed ? '' : ''}`}>
              <Routes>
                <Route path='/access' element={
                  <AccessPage />
                }>
                </Route>

                <Route path='/homepage' element={
                  <HomePage />
                }></Route>
              </Routes>
            </div>
        </div>
      </BrowserRouter >

    </>
  )
}

export default App
