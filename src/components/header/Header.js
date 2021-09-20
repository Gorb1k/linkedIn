import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import linkedAva from '../../assets/img/linkedin.svg'
import HeaderOption from "./HeaderOptions/HeaderOption";
import {useDispatch} from "react-redux";
import {logout} from "../../store/slices/userSlice";
import {auth} from "../../firebase";

const Header = () => {


    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className={'header'}>
            <div className={'header__left'}>
                <img src={linkedAva} alt="linked"/>
                <div className="header__search">
                <SearchIcon/>
                    <input placeholder='Search' type="text"/>
                </div>
            </div>
            <div className={'header__right'}>
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption avatar={true} onClick={logoutOfApp} title='me'/>
            </div>
        </div>
    );
};

export default Header;