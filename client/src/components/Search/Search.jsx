import React, { useState } from 'react'
import './Search.scss'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
function Search() {
    const [clicked, setClicked] = useState(false)
    const [searchedProduct, setSearchedProduct] = useState("")
    const nav = useNavigate()

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            nav(`/search_products/${searchedProduct}`)
        }
    }

    const handleBlur = (e) => {
        if (searchedProduct.length !== 0) {
            return
        }

        setClicked(!clicked)

    }
    return (
        <div className="search" onBlur={handleBlur}>

            {clicked && <div className={`search-input${clicked ? '' : '-reverse'}`}>
                <input
                    type="text"
                    name="search"
                    id="search" placeholder='Search product'
                    autoFocus={true}
                    value={searchedProduct}
                    onChange={(e) => setSearchedProduct(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <SearchIcon className='icon' />

            </div>
            }

            {!clicked && <SearchIcon
                onClick={() => setClicked(!clicked)}
                className='search-icon'
            />}


        </div>
    )
}

export default Search
