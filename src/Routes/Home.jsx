import React from 'react'
import Navbar from './Navbar'
import  "../css/Home.css"

function Home() {


  return (
    <>
    <Navbar/>
     <div className='Home-container'>
        <div className='two-in-one'>
        <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltbc0c1e6918b19b6a/6413f172fbf0f5117d73671a/easter-flowers-delivery-zone-10-banner-fy23.jpg?quality=70&auto=webp&optimize={medium}' alt='first-image'/>
        <form className='form-home-occasion'>
        <h4 style={{color:"rgb(110, 50, 144)"}}>FIND THE PERFECT GIFT</h4>
        <div className='Find-perfecti-gift'>
        <div>
        <label>Where is it going?</label>
         <input placeholder='Delivery zip code'/>
          </div>
         <div className='hero'>
        <label >Occasion</label>
        <select> 
        <option value="" selected>Select an item</option>
         <option value="item">Item 1</option>
         <option value="item2">Item 2</option>
         <option value="item3">Item 3</option>
        <option value="item4">Item 4</option>
       </select>
         </div>
        </div>
        <button>FIND A GIFT NOW</button>
         </form>
        </div>


        <h1>Send Flowers & Exclusive Gifts</h1>
        <div id='Send-flowers'>
        <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt3595a4f11ad56e50/63d92b2699f0c910e171a33c/flower-delivery-same-day-silo-191167xl-260x284.jpg?quality=85&auto=webp&optimize={medium}" alt='send-flowers'/>
          Same-Day Flower Delivery </div>
          <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blta2748b9a4b476529/63d304315ba46f75ddba03cf/sympathy-flowers-silo-191166XL-260x284.jpg?quality=85&auto=webp&optimize={medium}" alt='send-flowers'/>
           Sympathy</div>
          <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt867d5477b7adc192/627be2023debbf3afdd2ea1e/get-well-flowers-146761-silo-260x284.jpg?quality=85&auto=webp&optimize={medium}" alt='Get Well'/>
          Get Well</div>
          <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt26149ee749ecd0f3/62b5c27fa7c4490fd2ef03ef/magnificent-preserved-roses-silo-156623-260x284.jpeg?quality=85&auto=webp&optimize={medium}" alt='Love and Romance'/>
          Love and Romance</div>
          <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt117a124edd0bed9a/625d7667e4b2fd4fda37bffa/spring-chocolate-covered-strawberries-delivery-silo-192918m-260x284.jpg?quality=85&auto=webp&optimize={medium}" alt='Chocolate Covered Strawberries'/>
          Chocolate Covered Strawberries</div>
          <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt78bec1b71e74fbe5/6216889d9e46fb3ab4284975/get-well-flowers-silo-179053-260x284.jpg?quality=85&auto=webp&optimize={medium}" alt='Just Because'/>
          Just Because</div>
        </div>
        <div className='birthday-special' >
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt560de5441247b4fd/63f4e12f2abe1410912a1677/send-birthday-flowers-hero-fy23-V2.jpg?quality=85&auto=webp&optimize={medium}' alt='change'></img>
        </div>

        <h3 className='two-spring-htag'>OUR SPRING BULB EVENT: FREE GIFT WITH PURCHASE | SHOP NOW</h3>
        <div className='two-spring-bulb'>
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt29d3f3bc0810ec78/641dafd89a08934e5773ba9e/spring-bulb-event-tier-fy23-last-chance.jpg?quality=60&auto=webp&optimize={medium}' alt='spring-bulb'/>
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt42bd2ef9247e4942/64148c292a3bd877a662a6f7/peonies-tier-fy23.jpg?quality=60&auto=webp&optimize={medium}' alt='spring-bulb'/>
        </div>

        <h2 style={{textAlign:"center"}}>Explore Our Self-Care Essentials</h2>
        <div className='selfcare'>
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt83c25a21462cccea/63a61e2e9233961262fbbcfe/spa-gift-basket-silo-mk012144-260x284.jpg?quality=85&auto=webp&optimize={medium}'/>
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8ccd8ba5f57bb6c5/63a61e6a66600623830ad5b8/candle-gifts-lanterns-silo-mk021324-260x284.jpg?quality=85&auto=webp&optimize={medium}'/>
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt204357e08752a3bc/63a61ea27760ab1f00affbb1/gifts-under-25-silo-mk018491-260x284.jpg?quality=85&auto=webp&optimize={medium}'/>
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0c60554654188a74/63a61ee81d30ec7c2c531c79/zen-gifts-for-relaxation-silo-mkq016474-260x284.jpg?quality=85&auto=webp&optimize={medium}'/>
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt9f97ed604bf1a128/63a61f39609d40109bf54fe8/lavender-flowers-gifts-silo-155227-260x284.jpg?quality=85&auto=webp&optimize={medium}'/>
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt590656ac79c533bf/63a630b99233961262fbbd0a/cozy-comfort-gifts-silo-mk005330-260x284.jpg?quality=85&auto=webp&optimize={medium}'/>
        </div>
        
        <h2 className='delicious-gift'>DELICIOUS GIFTS MAKE THE CELEBRATION</h2>
        <div  className='two-spring-bulb'>
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt3690a6c493dd6a6a/63f93ad7325d0044fe5f8eb0/harry-and-david-gift-baskets-gourmet-food-tier-spring-fy23.jpg?quality=60&auto=webp&optimize={medium}' alt='err1'/>
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltba5c5bb4aa42ed46/640247a0952945362ea1ac93/gifts-from-personalization-mall-tier-spring-fy23-v2.jpg?quality=60&auto=webp&optimize={medium}' alt='err-2'/>
        </div>

        <div className='gifts-and-more'>
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf49215dfec69ecea/63e728bc4036a756ba2893e7/marketplace-fy23-spring-picnic-hero-v2.jpg?quality=85&auto=webp&optimize={medium}' alt='gift'/>
          <div>
          <img src='https://img.freepik.com/free-photo/blossom-floral-bouquet-decoration-colorful-beautiful-flowers-background-garden-flowers-plant-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-1103.jpg?w=1060&t=st=1680109152~exp=1680109752~hmac=cdd0edb15742608d3a43ca946879b00b77543a3fcd36e8f2410c11304b1af870' alt='my-choice'/>
          </div>
        </div>
     </div>
    </>
  )
}

export default Home