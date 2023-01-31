import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FilterProducts from '../../components/FilterProducts/FilterProducts'
import List from '../../components/List/List'
import Loading from '../../components/Loading/Loading'
import useFetch from '../../hooks/useFetch'
import "./Products.scss"


function Products() {

    const catID = useParams().id
    const [price, setPrice] = useState(500)
    const [sort, setSort] = useState('asc')
    const [subCat, setSubCat] = useState([])
    const [fetch, setFetch] = useState(null)
    const [page, setPage] = useState(1)

    const { data, loading, error } = useFetch(
        fetch
    )


    useEffect(() => {
        setFetch(
            `/products?populate=*&filters[$or][0][categories][title]=${catID}${subCat.map(item => `&filters[subcategories][id][$eq]=${item}`)}&filters[price][$lte]=${price}&sort=price:${sort}&pagination[page]=${page}&pagination[pageSize]=12`
        )
        window.scrollTo(0, 0);
    }, [price, sort, subCat, page, catID])



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
            <FilterProducts
                price={price}
                setPrice={setPrice}
                setSort={setSort}
                handleChange={handleChange}
                fetch={`/subcategories?filters[categories][title][$eqi]=${catID}`}
                catID={catID}
            />

            <div className="right">
                <img src="https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1" alt="" className='catImg' />

                <div className="top-pagination">
                    <Pagination
                        count={data?.meta?.pagination?.pageCount}
                        defaultPage={1}
                        page={page}
                        size={'small'}
                        onChange={(e, value) => setPage(value)}
                    />
                </div>

                <List data={data} loading={loading} />

                <div className="bottom-pagination">
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

export default Products
