import React from 'react'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import "./topbar.css"

function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">AdminDashboard</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">
                            2
                        </span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">
                            2
                        </span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9aFd3RDK6JfPNwLWN4FfVCEDJTHmwoPIpUWScW9NXuA&ec=48665701" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar