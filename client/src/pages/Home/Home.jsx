import React from 'react'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"

function Home() {
    return (
        <div className="home">
            <Slider />
            <FeaturedProducts type="featured" msg={"Uncover the hidden gems and best-sellers in our Featured Products section - where we handpick the newest and most exciting products for you to explore, buy and love!"} />
            <Categories />
            <FeaturedProducts type="trending" msg={"Stay ahead of the trend with our Trending Products section - where we bring you the most popular and in-demand items on the market, all in one convenient place. Shop now and be the first to own the latest must-haves."
            } />
            <Contact />
        </div>
    )
}

export default Home
