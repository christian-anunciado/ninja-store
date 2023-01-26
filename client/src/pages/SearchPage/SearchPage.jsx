import React, { useEffect, useState } from 'react'
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import './SearchPage.scss'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import List from '../../components/List/List';
import FilterProducts from '../../components/FilterProducts/FilterProducts';

function SearchPage() {
    const name = useParams().name
    const [price, setPrice] = useState(500)
    const [sort, setSort] = useState('asc')

    const [fetch, setFetch] = useState(`/products?populate=*&filters[$or][0][title][$containsi]=${name}&filters[$or][1][categories][title][$containsi]=${name}&filters[$or][2][subcategories][title][$containsi]=${name}&filters[price][$lte]=${price}&sort=price:${sort}&pagination[page]=1&pagination[pageSize]=5`)

    const { data, loading, error } = useFetch(
        fetch
    )

    useEffect(() => {
        setFetch(
            `/products?populate=*&filters[$or][0][title][$containsi]=${name}&filters[$or][1][categories][title][$containsi]=${name}&filters[$or][2][subcategories][title][$containsi]=${name}&filters[price][$lte]=${price}&sort=price:${sort}`
        )

    }, [name, price, sort])




    return (
        <div className="search-result">
            <FilterProducts price={price} setPrice={setPrice} setSort={setSort} />


            <div className="right">
                <div className="top">
                    <div className='result-tip'>
                        <TipsAndUpdatesOutlinedIcon />
                        <p>Search result for <span>{`'${name}'`}</span></p>
                    </div>
                    1
                </div>

                <List data={data} loading={loading} />

                <div className="bottom">

                </div>

            </div>
        </div>
    )
}

export default SearchPage
