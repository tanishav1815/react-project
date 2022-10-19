import React from 'react';
import {Link} from 'react-router-dom';
// import '../card.css'
const Cards = ({img,caption}) => {
    const url="/player/"+caption;
    return (
        <div>
            <Link to={url} className="card1">
                <img src={img} className="card__image" alt="" />
                <div className="card__overlay">
                    <div className="card__header">
                        
                        <div className="card__header-text">
                            <h3 className="card__title">{caption}</h3>
                            <span className="card__date">Travel / August 21 2017</span>
                        </div>
                    </div>
                    <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>

                
            </Link>
        </div>
    );
}

export default Cards;