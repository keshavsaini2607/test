import React from 'react'
import './CompanyCard.css'

const CompanyCard = ({item}) => {
    return (
        <div className="companyCardContainer">
            <img src={item.img} alt="" />
            <div className="cardOver">
                <h2>lOGO</h2>
            </div>
        </div>
    )
}

export default CompanyCard
