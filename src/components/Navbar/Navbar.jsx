import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navContainer">
            <div>
                <a href="#" className="navHeading">ALGo</a>
            </div>
            <div className="navList">
                <div style={{marginRight: '4rem'}}>
                    <span id="active">About</span>
                    <span>Teams</span>
                    <span>Companies</span>
                    <span>News</span>
                    <span>Jobs</span>
                </div>
                <div className="socialIcon">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-f.png" />
                </div>
                <div className="socialIcon">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-2--v1.png" />
                </div>
                <div className="socialIcon">
                    <img src="https://img.icons8.com/android/24/000000/twitter.png" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
