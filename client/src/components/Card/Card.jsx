import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'

function Card({ item }) {
    return (
        <Link to={`/product/${item.id}`} className='link'>
            <div className="card">
                <div className="image">
                    {item.isNew && <span>New Arrival</span>}
                    <img src={item.img} alt="" className="mainImg" />
                    <img src={item.img2} alt="" className="secondImg" />
                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                    <h3 className='oldPrice'>${item.oldPrice}</h3>
                    <h3>${item.price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card