import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import "./Products.scss"

function Products() {

    const catID = parseInt(useParams().id)
    const [price, setPrice] = useState(1000)
    const [sort, setSort] = useState(null)


    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" id="1" name='category' />
                        <label htmlFor="1">Hat</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="2" name='category' />
                        <label htmlFor="2">Shirts</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="3" name='category' />
                        <label htmlFor="3">Coats</label>
                    </div>
                </div>

                <div className="filterItem">
                    <h2>Filter by Price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range"
                            id="price"
                            max={1000}
                            min={0}
                            defaultValue={0}
                            name='price'
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <span>{price}</span>
                    </div>
                </div>

                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id="asc" value={'asc'} name='sort'
                            onChange={(e) => setSort(e.target.value)}
                        />
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id="dsc" value={'dsc'} name='sort'
                            onChange={(e) => setSort(e.target.value)}
                        />
                        <label htmlFor="dsc">Price (Highest first)</label>
                    </div>

                </div>
            </div>

            <div className="right">
                <img src="https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1" alt="" className='catImg' />

                <List catID={catID} price={price} sort={sort} />
            </div>
        </div>
    )
}

export default Products
