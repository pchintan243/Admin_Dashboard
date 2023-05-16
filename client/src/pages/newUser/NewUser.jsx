import React from 'react'
import "./newUser.css"

const NewUser = () => {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder='Smith' />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='Smith Johnson' />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="text" placeholder='Smith@gmail.co.in' />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder='password' />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="password" placeholder='+91 9887682684' />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="password" placeholder='Miami | Florida' />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name='gender' id='male' value='male' />
                        <label htmlFor="Male">Male</label>
                        <input type="radio" name='gender' id='female' value='female' />
                        <label htmlFor="Female">Female</label>
                        <input type="radio" name='gender' id='other' value='other' />
                        <label htmlFor="Other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser