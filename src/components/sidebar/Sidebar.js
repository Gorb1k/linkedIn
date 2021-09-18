import React from 'react';
import './Sidebar.css'
import {Avatar} from "@material-ui/core";

const Sidebar = () => {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt=""/>
                <Avatar className='sidebar__avatar'/>
                <h2>Horb Ihor</h2>
                <h4>gorbigorolegovich@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2500</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>3000</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJS')}
            </div>
        </div>
    );
};

export default Sidebar;