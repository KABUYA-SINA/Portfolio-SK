import React from 'react';
import Ratings from './Ratings';
import '../sass/pages/_cards.scss';

const Cards = ({ title, rating }) => {
    return (
        <div className='card'>
            <div className='skill'>
                <span>{title}</span>
                <span>{`${rating}%`}</span>
            </div>
            <Ratings rating={rating} />
        </div>
    )
}

export default Cards