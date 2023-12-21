import React from 'react';
import '../sass/pages/_rating.scss';

const Ratings = ({ rating }) => {
    let arr = []
    for (let i = 5; i <= 100; i += 5) {
        arr.push(i)
    }
    const ratings = arr;
    const verifiyRate = rating === 'rating' ? '' : (<div className='rate-empty'></div>)
    return (
        <div className="range-ratings">
            {
                ratings.map((currentRange) => rating >= currentRange
                    ?
                    <div className='rate-full' key={currentRange.toString()}></div>
                    :
                    <div className='empty' key={currentRange.toString()}>{verifiyRate}</div>)
            }
        </div>
    )
}

export default Ratings