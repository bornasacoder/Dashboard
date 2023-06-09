import React from 'react'
import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp, WorkOutline, Report, PermIdentity, Storefront, MailOutline, DynamicFeed, ChatBubbleOutline, AttachMoney, BarChart } from '@material-ui/icons';
import {Link} from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
               <Link to='/' className='link'>
                <li className="sidebarListItem active">
                   <LineStyle className='sidebarIcon'  />
                   Home
                </li>
               </Link>
               <Link to='/' className='link' >
                <li className="sidebarListItem">
                   <Timeline className='sidebarIcon'/>
                   Analytics
                </li>
               </Link>
               <Link to="/" className='link' >
                <li className="sidebarListItem">
                   <TrendingUp className='sidebarIcon'/>
                   Sales
                </li>
               </Link>
              
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
               <Link to='/users' className='link'>
                <li className="sidebarListItem">
                   <PermIdentity className='sidebarIcon'/>
                   Users
                </li>
               </Link>
               <Link to='/products' className='link'>
                <li className="sidebarListItem">
                   <Storefront className='sidebarIcon'/>
                   Products
                </li>
               </Link>
             
            </ul>
        </div>
        
    
        
      

       </div>
    </div>
  )
}
