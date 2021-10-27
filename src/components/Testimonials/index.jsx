import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const headingStyle = {
    fontSize: '3rem',
    color: '#4753BD',
    textAlign: 'center',
    fontWeight: 'bolder',
    marginBottom: '2rem'
}

const img = 'https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_960_720.jpg'

const Testimonials = () => {
    return (
        <div style={{ marginTop: '5rem', paddingBottom: '6rem' }}>
            <h1 style={headingStyle}>Testimonials</h1>
            <Carousel plugins={['arrows']}>
                <img src={img} style={{width: '100%', objectFit: 'cover', height: '40vh'}} />
                <img src={img} style={{width: '100%', objectFit: 'cover', height: '40vh'}} />
                <img src={img} style={{width: '100%', objectFit: 'cover', height: '40vh'}} />
            </Carousel>
        </div>
    )
}

export default Testimonials
