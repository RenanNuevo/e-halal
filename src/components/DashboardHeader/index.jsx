import React from 'react';

import './styles.css';

function DashboardHeader ({ btnText, onClick }) {
    return(
        <div className='dashbord-header-container'>
            {btnText && 
                <button className='dashbord-header-btn' onClick={onClick}>{btnText}</button>
            }

            {/* <div className='dashbord-header-right'>
                <img 
                    // src={NotificationIcon}
                    alt='notification-icon'
                    className='dashbord-header-icon' />
                <img 
                    // src={SettingsIcon}
                    alt='settings-icon'
                    className='dashbord-header-icon' />
            </div> */}
        </div>
    )
}

export default DashboardHeader;