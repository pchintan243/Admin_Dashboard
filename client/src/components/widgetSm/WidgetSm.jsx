import React from 'react'
import "./widgetSm.css"
import { Visibility } from '@material-ui/icons'
const WidgetSm = () => {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://img.etimg.com/thumb/msid-94422013,width-300,height-225,imgsize-24360,,resizemode-75/andrew-tate-.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Chintan</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='.widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://img.etimg.com/thumb/msid-94422013,width-300,height-225,imgsize-24360,,resizemode-75/andrew-tate-.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Chintan</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='.widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://img.etimg.com/thumb/msid-94422013,width-300,height-225,imgsize-24360,,resizemode-75/andrew-tate-.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Chintan</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='.widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://img.etimg.com/thumb/msid-94422013,width-300,height-225,imgsize-24360,,resizemode-75/andrew-tate-.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Chintan</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='.widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://img.etimg.com/thumb/msid-94422013,width-300,height-225,imgsize-24360,,resizemode-75/andrew-tate-.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Chintan</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm