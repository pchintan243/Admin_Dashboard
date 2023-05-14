import React from 'react'
import "./user.css"
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@material-ui/icons'

const User = () => {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Deven alley</span>
                            <span className="userShowUserTitle">React Developer</span>
                        </div>
                    </div>

                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon' />
                            <span className="userShowInfoTitle">alley56</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className='userShowIcon' />
                            <span className="userShowInfoTitle">12.12.1977</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className='userShowIcon' />
                            <span className="userShowInfoTitle">+91 1234567890</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon' />
                            <span className="userShowInfoTitle">Hello@gmail.co.in</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className='userShowIcon' />
                            <span className="userShowInfoTitle">Miami | USA</span>
                        </div>
                    </div>

                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder="alley56" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRIght"></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User