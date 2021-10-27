import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'

const HomeScreen = () => {
    return (
        <div className="container">
            <Navbar />
            <div className="overlay"></div>
            <div className="content">
                <h1>40 years of investing innovation</h1>
                <span>First VC Firm Est. 1981</span>
            </div>
        </div>
    )
}

export default HomeScreen
