import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

function Header() {
    // REDUX
    const dispatch = useDispatch();
    const user = useSelector(selectUser);


    // Logout Function when click on Avatar
    const logoutOfApp = () => {
        dispatch(logout());

        auth.signOut();

    }

    if(user){
         return (

        
                <div className='header'>

                <div className="header__left">

                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                    <div className="header__search">
                        {/* Search Icon */}
                        <SearchIcon />
                        <input placeholder='Search' type="text" />
                    </div>

                    
                    

                </div>

                    <div className="header__right">

                        <span className='desktop'>
                            <HeaderOption  Icon={HomeIcon}title='Home' />
                            <HeaderOption  Icon={SupervisorAccountIcon}title='Network' />
                            <HeaderOption  Icon={BusinessCenterIcon}title='Jobs' />
                            <HeaderOption  Icon={ChatIcon}title='Messaging' />
                            <HeaderOption  Icon={NotificationsIcon}title='Notifications' />

                        </span>
                            
                        <p>
                        <HeaderOption 
                                className='mobile'
                                avatar={user ? true: false}
                                    title={user ? 'Me': ''}
                                    onClick={logoutOfApp}
                            />
                        </p>
                            

                    </div>

                   
        </div>
    );
         };

    return <div className='header' />;
}

export default Header
