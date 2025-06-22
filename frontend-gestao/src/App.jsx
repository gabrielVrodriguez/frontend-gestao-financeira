import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AccessPage from './pages/AccessPage.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div className='gridTemplate  '>

          <Routes>

            <Route path='/access' element={
              <AccessPage />

            }>

            </Route>

          </Routes>
        </div>

      </BrowserRouter>

    </>
  )
}

export default App
