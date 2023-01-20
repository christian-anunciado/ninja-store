import React from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../Card/Card'
import './List.scss'

function List({ catID, price, sort, subCat }) {

    const { data, loading, error } = useFetch(
        `/products?populate=*&filters[categories][title]=${catID}${subCat.map(item => `&filters[subcategories][id][$eq]=${item}`)}&filters[price][$lte]=${price}&sort=price:${sort}`
    )

    return (
        <div className="list">
            {loading
                ? "Loading"
                : data?.data?.map(items =>
                    <Card item={items.attributes} key={items.id} id={items.id} />
                )}
        </div>
    )
}

export default List
