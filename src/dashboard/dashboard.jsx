import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from '../components/Sidebar'
import sidebar_menu from '../constants/sidebar-menu';

import '../index.css';
import Orders from './pages/Orders';

import loginImg from '../assets/bg.png'

function Dashboard () {
  return(
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
        <div className='dashboard-body'>
            <Routes>
                <Route path="*" element={< Orders/>} />
                <Route exact path="/orders" element={< Orders/>} />
                <Route exact path="/menu" element={<div></div>} />
                <Route exact path="/profile" element={<div></div>} />
            </Routes>
        </div>
      </div>
  )
}

export default Dashboard;