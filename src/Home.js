import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src={
            'https://images.unsplash.com/photo-1612703769284-0103b1e5ef70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b25saW5lJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'
          }
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="01"
            title="HP Envy Inspire 7220e Wireless Color All-in-One Printer with Bonus 6 Months Instant Ink with HP+ (327B0A)
            "
            price={149.99}
            rating={4}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/5160jc3NsSL._AC_UL675_SR675,480_.jpg'
            }
          />
          <Product
            id="02"
            title="HULKMAN Alpha65 Jump Starter 1200 Amp Car Starter for up to 6.5L Gas and 4L Diesel Engines with LED Display 12V Lithium…
            "
            price={68.99}
            rating={5}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/61fXq+7MW+L._AC_UL675_SR675,480_.jpg'
            }
          />
        </div>
        <div className="home__row">
          <Product
            id="03"
            title="PlayStation DualSense Wireless Controller – Galactic Purple
            "
            price={59.0}
            rating={5}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/61Uh8NFDzsL._AC_UL675_SR675,480_.jpg'
            }
          />
          <Product
            id="04"
            title="BISSELL® air180 Home Air Purifier with HEPA and Carbon Filters for Medium to Large Room and Home, Quiet Bedroom Air Cleaner for…
            "
            price={179.99}
            rating={5}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/71-Tig3i4fL._AC_UL675_SR675,480_.jpg'
            }
          />
          <Product
            id="05"
            title="2022 Topps Baseball Series 2 Retail Display Box - 24 Packs Per Box"
            price={87.99}
            rating={4}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/61iY2Awyo0L._AC_UL675_SR675,480_.jpg'
            }
          />
        </div>
        <div className="home__row">
          <Product
            id="06"
            title="Red2Fire 𝗨𝗽𝗴𝗿𝗮𝗱𝗲𝗱 Shockproof for iPhone 13 Case, with 2 Pack [Tempered Glass Screen Protector + Camera Lens Protector][12 FT…
                "
            price={16.99}
            rating={4}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/91XLDzLDEEL._AC_UL675_SR675,480_.jpg'
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Home
