import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import useFetch from '../../hooks/useFetch'
import "./Products.scss"


function Products() {

    const catID = useParams().id
    const [price, setPrice] = useState(1000)
    const [sort, setSort] = useState('asc')
    const [subCat, setSubCat] = useState([])


    const { data, loading, error } = useFetch(`/subcategories?filters[categories][title][$eqi]=${catID}`)

    const handleChange = (e) => {
        const value = e.target.value
        const isCheck = e.target.checked

        setSubCat(
            isCheck ? [...subCat, value]
                : subCat.filter(item => item !== value)
        )
    }

    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>{catID} Categories</h2>
                    {loading
                        ? "Loading"
                        : data?.data?.map(item => (
                            <div className="inputItem" key={item.id}>
                                <input type="checkbox" id={item.id} name='category'
                                    value={item.id}
                                    onChange={handleChange} />
                                <label htmlFor={item.id}>{item.attributes?.title}</label>
                            </div>
                        ))
                    }
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
                        <input type="radio" id="dsc" value={'desc'} name='sort'
                            onChange={(e) => setSort(e.target.value)}
                        />
                        <label htmlFor="dsc">Price (Highest first)</label>
                    </div>

                </div>
            </div>

            <div className="right">
                <img src="https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1" alt="" className='catImg' />

                <List catID={catID} price={price} sort={sort} subCat={subCat} />
            </div>
        </div>
    )
}

export default Products
