import React from 'react'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import './Footer.css'

function Footer() {
    return (
        <div className='footer' style={{visibility: 'hidden'}}>
             <div className="footer__options" >
                            
                            
                            <HeaderOption Icon={HomeIcon}title='Home' />
                            <HeaderOption Icon={SupervisorAccountIcon}title='Network' />
                            <HeaderOption Icon={BusinessCenterIcon}title='Jobs' />
                            <HeaderOption Icon={ChatIcon}title='Messaging' />
                            <HeaderOption Icon={NotificationsIcon}title='Notifications' />

                    </div>
        </div>
    )
}

export default Footer
