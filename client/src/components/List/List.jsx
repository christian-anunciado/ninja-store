import React from 'react'
import Card from '../Card/Card'
import './List.scss'

function List({ catID, price, sort }) {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1",
            img2: "https://images.pexels.com/photos/1972112/pexels-photo-1972112.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1",
            title: "Sports",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/2453237/pexels-photo-2453237.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1",
            title: "T-Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/9399676/pexels-photo-9399676.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1",
            title: "Hat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        }

    ]

    return (
        <div className="list">
            {data?.map(items =>
                <Card item={items} key={items.id} />
            )}
        </div>
    )
}

export default List
