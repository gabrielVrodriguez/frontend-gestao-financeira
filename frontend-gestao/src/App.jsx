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
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Deixei como true para vermos o layout
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      <BrowserRouter>
        

          <div className='flex min-h-screen '>
            {isAuthenticated && (
              <SideBar
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
              />
            )}



            <div className={` flex-1  bg-black-900 transition-all duration-300 ${isCollapsed ? 'pl-20' : 'pl-64'}`}>
              <Routes>
                <Route path='/access' element={
                  <AccessPage />
                }>
                </Route>

                <Route path='/homePage' element={
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
