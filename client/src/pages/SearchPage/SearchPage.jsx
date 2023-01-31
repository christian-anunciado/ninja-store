import React, { useEffect, useState } from 'react'
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import './SearchPage.scss'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import List from '../../components/List/List';
import FilterProducts from '../../components/FilterProducts/FilterProducts';
import { Pagination, PaginationItem } from '@mui/material';
import ScrollToTop from '../../hooks/ScrollToTop';

function SearchPage() {
    const name = useParams().name
    const [price, setPrice] = useState(500)
    const [sort, setSort] = useState('asc')
    const [page, setPage] = useState(1)

    const [fetch, setFetch] = useState(`/products?populate=*&filters[$or][0][title][$containsi]=${name}&filters[$or][1][categories][title][$containsi]=${name}&filters[$or][2][subcategories][title][$containsi]=${name}&filters[price][$lte]=${price}&sort=price:${sort}&pagination[page]=${page}&pagination[pageSize]=6`)

    const { data, loading, error } = useFetch(
        fetch
    )

    useEffect(() => {
        setFetch(
            `/products?populate=*&filters[$or][0][title][$containsi]=${name}&filters[$or][1][categories][title][$containsi]=${name}&filters[$or][2][subcategories][title][$containsi]=${name}&filters[price][$lte]=${price}&sort=price:${sort}&pagination[page]=${page}&pagination[pageSize]=12`
        )
        window.scrollTo(0, 0);

    }, [name, price, sort, page])

    return (
        <div className="search-result">
            <FilterProducts price={price} setPrice={setPrice} setSort={setSort} />


            <div className="right">
                <div className="top">

                    <div className='result-text'>
                        <TipsAndUpdatesOutlinedIcon />
                        <p>Search result for <span>{`'${name}'`}</span></p>
                    </div>

                    <Pagination
                        count={data?.meta?.pagination?.pageCount}
                        defaultPage={1}
                        page={page}
                        size={'small'}
                        onChange={(e, value) => setPage(value)}
                    />
                </div>

                <List data={data} loading={loading} />

                <div className="bottom">
                    <Pagination
                        count={data?.meta?.pagination?.pageCount}
                        defaultPage={1}
                        page={page}
                        size={'medium'}
                        onChange={(e, value) => setPage(value)}
                        variant="outlined"
                        shape="rounded"
                    />
                </div>

            </div>
        </div>
    )
}

export default SearchPage
