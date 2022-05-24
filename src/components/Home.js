import React from 'react'
import "./Home.css"
import Product from './Product'
import Header from './Header'

const Home = () => {
    return (
        <>
            <Header />
            <div className='home'>
                <div className="home__container">
                    <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                    <div className="home__row">
                        <Product
                            id="12321341"
                            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                            price={11.96}
                            rating={5}
                            image="https://source.unsplash.com/1600x500/?shopping,ecommerce"
                        />
                        <Product
                            id="49538094"
                            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                            price={239.0}
                            rating={4}
                            image="https://source.unsplash.com/1600x500/?models"
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="4903850"
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                            price={199.99}
                            rating={3}
                            image="https://source.unsplash.com/1600x500/?sports"
                        />
                        <Product
                            id="23445930"
                            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                            price={98.99}
                            rating={5}
                            image="https://source.unsplash.com/1600x500/?movies"
                        />
                        <Product
                            id="3254354345"
                            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                            price={598.99}
                            rating={4}
                            image="https://source.unsplash.com/1600x500/?travel"
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="90829332"
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                            price={1094.98}
                            rating={4}
                            image="https://source.unsplash.com/1600x500/?love"
                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home
