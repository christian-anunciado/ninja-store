import React, { useContext } from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'
import { CurrencyContext } from '../../context/currencyContext'

function Card({ item, id }) {
    const { unitPrice } = useContext(CurrencyContext)

    return (
        <div className="card">
            <Link to={`/product/${id}`} className='link'>
                <div className="image">
                    {item.isNew && <span>New Arrival</span>}
                    <img src={`${process.env.REACT_APP_API_UPLOADURL}${item.img?.data?.attributes?.url}`} alt="" className="mainImg" loading='lazy' />
                    {item.img2?.data?.attributes?.url
                        ? <img src={`${process.env.REACT_APP_API_UPLOADURL}${item.img2?.data?.attributes?.url}`} alt="" className="secondImg" loading='lazy' />
                        : null
                    }
                </div>
            </Link>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3 className='oldPrice'>{unitPrice(item.oldPrice || item.price + 20)}</h3>
                <h3>{unitPrice(item.price)}</h3>
            </div>
        </div>
    )
}

export default Card
