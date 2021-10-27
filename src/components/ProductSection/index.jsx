import React from 'react'
import Info from '../InfoBanner/Info'
import ProductCard from './ProductCard'

const cardItem = [
    {
        id: '1',
        heading: 'Algo Ventures',
        btnText: 'Visit',
        img: 'https://cdn.pixabay.com/photo/2016/03/09/09/57/drone-1245980_960_720.jpg'
    },
    {
        id: '2',
        heading: 'Algo +',
        btnText: 'Visit',
        img: 'https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_960_720.jpg'
    },
    {
        id: '3',
        heading: 'Algo Canada',
        btnText: 'Visit',
        img: 'https://images.financialexpress.com/2021/02/clubhouse.jpg'
    }
]

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '4rem'
}

const ProductScreen = () => {

    const infoContent = {
        heading: 'One Firm. Multiple Strategies.',
        description: 'Thematic Investing Across Dedicated Teams'
    }

    return (
        <div>
            <Info 
                heading={infoContent.heading}
                description={infoContent.description}
            />
            <div style={containerStyle}>
                {
                    cardItem.map(item => (
                        <ProductCard
                            item={item}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductScreen
