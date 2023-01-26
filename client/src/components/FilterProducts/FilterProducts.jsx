import React from 'react'
import useFetch from '../../hooks/useFetch'
import Loading from '../Loading/Loading'
import './FilterProducts.scss'

function FilterProducts({ price, setPrice, setSort, catID, handleChange, fetch }) {

    // const { data, loading, error } = useFetch(`/subcategories?filters[categories][title][$eqi]=${catID}`)
    const { data, loading, error } = useFetch(fetch)

    return (
        <div className="filter">
            {data && <div className="filterItem">
                <h2>{catID} Categories</h2>
                {loading
                    ? <Loading color={'black'} height={'150px'} width={'150px'} loadingHeight={'24px'} loadingWidth={'24px'} />
                    : data?.data?.map(item => (
                        <div className="inputItem" key={item.id}>
                            <input type="checkbox" id={item.id} name='category'
                                value={item.id}
                                onChange={handleChange} />
                            <label htmlFor={item.id}>{item.attributes?.title}</label>
                        </div>
                    ))
                }
            </div>}

            <div className="filterItem">
                <h2>Filter by Price</h2>
                <div className="inputItem">
                    <span>0</span>
                    <input type="range"
                        id="price"
                        max={1000}
                        min={1}
                        defaultValue={price}
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
    )
}

export default FilterProducts
