import React from 'react'
import './ProductCard.css'

const ProductCard = ({item}) => {
    const {img, heading, btnText} = item;
    console.log(img)

    return (
        <div className="cardContainer">
            <img src={img} alt="Card Image" />
            <div className="cardContent">
                <h1>{heading}</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sequi.</span>
                <button>{btnText}</button>
            </div>
        </div>
    )
}

export default ProductCard
