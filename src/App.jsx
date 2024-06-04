import React from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import './styles/Global.scss'
import Login from './pages/Login'

const App = () => {
    return (
        
         <div className='app-styled'>
             <Sidebar />
             <Home />
            
         </div>
    )
}

export default App
