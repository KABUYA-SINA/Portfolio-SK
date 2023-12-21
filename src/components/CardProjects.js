import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/pages/_cards-projetcs.scss';

const CardProjects = ({ id, comment, alt, cover, name, src, host, className }) => {
    return (
        <div className='card-projets' id={id}>
            <div className="image-projets">
                <img src={cover} alt={alt} />
                <span className={className}>{host}</span>
            </div>
            <div className="details">
                <h2>{name}</h2>
                <p>{comment}</p>
                <Link to={src}
                    className='details-link'
                    target='_blank'
                    rel='noreferrer'
                >
                    <button type='button' className='btn-details'>
                        voir ce projet sur github
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CardProjects