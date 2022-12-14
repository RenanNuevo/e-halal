import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

import SideBarItem from './sidebar-item';
import Carousel from '../Carousel';
import './styles.css';
import logo from '../../assets/logo.png';
// import LogoutIcon from '../../assets/icons/logout.svg';

function SideBar ({ menu }) {
    const location = useLocation();
    const [momentObject, setMomentObject] = useState(moment());
    const [active, setActive] = useState(0);

    const curDate = momentObject.format('MMMM D, yyyy');
    const curTime = momentObject.format('hh:mm:ss');
    
    useEffect(() => {
        setInterval(() => setMomentObject(moment()), 1000);
    }, [momentObject])
        
    useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname])

    const __navigate = (id) => {
        setActive(id);
    }

    return(
        <nav className='sidebar shadow-lg'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>
                    <img
                        src={logo}
                        alt="logo" />
                </div>
                <div className='ml-10 mb-5 -my-10 text-gray-900'>
                   <p className='text-xl pb-4'>{curDate}</p>
                   <p className='text-5xl'>{curTime}</p>
               </div>
                <div className='sidebar-container'>
                    <div className='sidebar-items'>
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                                    {/* {item.submenu && (
                                        <div onClick={() => __navigate(item.submenu.id)}>
                                        <SideBarItem
                                            active={item.submenu.id === active}
                                            item={item.submenu} />
                                    </div>
                                    )} */}
                            </div>
                        ))}
                    </div>

                    <div className='sidebar-footer'>
                        <Carousel />
                        {/* <span className='sidebar-item-label'>Logout</span>
                        <img 
                            // src={LogoutIcon}
                            alt='icon-logout'
                            className='sidebar-item-icon' /> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;