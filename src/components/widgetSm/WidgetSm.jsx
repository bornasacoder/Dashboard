import React from 'react'
import "./widgetsm.css";
import {Visibility} from "@material-ui/icons"
export const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className='widgetSmTitle'>New Join Members</span>
        <ul className="WidgetSmList">
          <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='widgetSmImg' alt="" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Ashish singh</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className='widgetSmIcon' />
                Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='widgetSmImg' alt="" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Ashish singh</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className='widgetSmIcon' />
                Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='widgetSmImg' alt="" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Ashish singh</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className='widgetSmIcon' />
                Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='widgetSmImg' alt="" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Ashish singh</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className='widgetSmIcon' />
                Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='widgetSmImg' alt="" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Ashish singh</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className='widgetSmIcon' />
                Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='widgetSmImg' />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Ashish singh</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className='widgetSmIcon' />
                Display
            </button>
          </li>
        </ul>
        </div>
  )
}
