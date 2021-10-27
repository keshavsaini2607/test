import React from 'react'
import './About.css'

const AboutSection = () => {
    return (
        <div className="aboutContainer">
            <div className="header">
                <h1>Creating value through partnership,  experience, and trust</h1>
            </div>
            <div className="aboutContent">
                <img src="https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_960_720.jpg" alt="About image" />
                <div className="desc">
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elitRepellat odit tempora repudiandae at laborum beatae enim quia nulla sit dolorum, ratione doloremque quod natus amet atque incidunt esse omnis qui! Aut iste nemo earum ex. Delectus nemo nisi repellat neque dicta beatae accusantium ullam natus quo unde voluptas vero rerum quos cum accusamus aliquam optio, quam rem tempora, asperiores corrupti
                    </span>
                    <button className="aboutBtn">
                        Meet the team
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
