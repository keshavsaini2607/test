import React from 'react'
import Info from '../InfoBanner/Info'
import CompanyCard from './CompanyCard'
import './CompanyCard.css'

const infoContent = {
    heading: 'Companies',
    description: "Investing in People. Investing in Ideas. Investing in the Future.We invest in software, cleantech, healthtech, and more"
}

const companies = [
    {
        id: '1',
        img: 'https://cdn.pixabay.com/photo/2020/06/07/11/27/umbrella-5269946_960_720.jpg'
    },
    {
        id: '2',
        img: 'https://cdn.pixabay.com/photo/2015/03/26/09/41/phone-690091_960_720.jpg'
    },
    {
        id: '3',
        img: 'https://cdn.pixabay.com/photo/2014/11/03/10/44/camera-514992_960_720.jpg'
    },
    {
        id: '4',
        img: 'https://cdn.pixabay.com/photo/2015/01/20/13/13/samsung-605439_960_720.jpg'
    },
    {
        id: '5',
        img: 'https://cdn.pixabay.com/photo/2015/03/26/09/41/phone-690091_960_720.jpg'
    },
    {
        id: '6',
        img: 'https://cdn.pixabay.com/photo/2015/01/20/13/13/samsung-605439_960_720.jpg'
    },
    {
        id: '7',
        img: 'https://cdn.pixabay.com/photo/2020/06/07/11/27/umbrella-5269946_960_720.jpg'
    },
    {
        id: '8',
        img: 'https://cdn.pixabay.com/photo/2015/03/26/09/41/phone-690091_960_720.jpg'
    }
]


const CompanySection = () => {
    return (
        <div>
            <Info
                heading={infoContent.heading}
                description={infoContent.description}
                containerStyle='row'
            />
            <div className="companyContainer">
                {
                    companies.map(item => (
                        <CompanyCard
                            item={item}
                        />
                    ))
                }
            </div>
            <div className="action">
                <h1>View All Companies</h1>
                <img src="https://img.icons8.com/color/48/000000/arrow--v1.png" />
            </div>
        </div>
    )
}

export default CompanySection
