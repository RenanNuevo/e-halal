import React, {useState} from "react";
import { Link } from 'react-router-dom';

import './styles.css';

const SideBarItem = ({ item, active }) => {
    const Icon = item.Icon
    const [hover, setHover] = useState(false);
    const [open, setOpen] = useState(false)

    if(item.submenu) {
        return (
            <div className="">
                <div className={active ? 'sidebar-item-active' : 'sidebar-item'} onClick={() => setOpen(!open)}>
                        { Icon && Icon }
                    <span className='sidebar-item-label'>{item.title}</span>
                </div>
                <div className={`${open ?  'block' : 'hidden'}`}>
                    {
                        item.submenu.map((item, index) => {
                           return (
                            <Link 
                                key={index}
                                to={item.path}
                                className="sidebar-sub-item" >
                                    {item.Icon && item.Icon}
                                    <span className='sidebar-item-label'>{item.title}</span>
                            </Link>
                           )
                        })
                    }
                </div>
            </div>
        )
    }
    else {
        return (
            <Link 
                to={item.path}
                className={active ? 'sidebar-item-active' : 'sidebar-item'} >
                    {Icon && Icon}
                    <span className='sidebar-item-label'>{item.title}</span>
            </Link>
        )
    }
}
export default SideBarItem;
