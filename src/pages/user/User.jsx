import React from 'react'
import './user.css'

import {PermIdentity,CalendarToday,MailOutline,PhoneAndroid,LocationSearching, Publish} from "@material-ui/icons"
export const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='userShowImg' />
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">Diksha Singh</span>
                        <span className="userShowUserTitle">Developer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                    <PermIdentity className='userShowIcon'/>
                    <span className="userShowInfoTitle">diksha744542</span>
                    </div>
                    <div className="userShowInfo">
                    <CalendarToday className='userShowIcon'/>
                    <span className="userShowInfoTitle">10.12.2001</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                    <PhoneAndroid className='userShowIcon'/>
                    <span className="userShowInfoTitle">+91 849383412</span>
                    </div>
                    <div className="userShowInfo">
                    <MailOutline className='userShowIcon'/>
                    <span className="userShowInfoTitle">diksha@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                    <LocationSearching className='userShowIcon'/>
                    <span className="userShowInfoTitle">Haridwar | India</span>
                </div>
                    
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label htmlFor="">Username</label>
                            <input type="text" placeholder='Diksha744542' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Full Name</label>
                            <input type="text" placeholder='Diksha Singh' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='diksha@gmail.com' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Phone </label>
                            <input type="text" placeholder='+91 3234242423' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Address</label>
                            <input type="text" placeholder='Haridwar | India' className='userUpdateInput' />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=600" className='userUpdateImg' alt="" />
                            <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                            <input type="file" id='file' style={{display:"none"}} />
                        </div>
                         <button className='userUpdateButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
