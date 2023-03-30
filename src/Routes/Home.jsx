import React from 'react'
import Navbar from './Navbar'
import Footer from "../Components/Footer"
import  "../css/Home.css"
import poster from "../images/poster.png"
import { AiFillStar } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import 'typeface-poppins';


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
         
         <h2 style={{textAlign:"center"}}>Trending Flowers & Gifts</h2>
         <div className='eight-images'>
        <div>
          <img src='https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191309lz.jpg?quality=85&auto=webp&optimize={medium}' alt='err'/>
          <p>Spring Sensation™</p>
        </div>
        <div>
          <img src='https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191254xlx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}' alt='err'/>
          <p>Fields Of Europe® </p>
        </div>
        <div>
          <img src='https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/90925mpuv5ch29x.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}' alt='err-3'/>
          <p>Two Dozen Assorted Roses</p>
        </div>
        <div>
          <img src='https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/91158mmmj2sc9x.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}' alt='err-4'/>
          <p>Sweet Spring Lily Bouquet</p>
        </div>
        <div>
          <img src='https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/158024lg1x.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}' alt='err-5'/>
          <p>Delightful Daffodil Bulbs </p>
        </div>
        <div>
          <img src='https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/90577mprsv1sc9x.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}' alt='err-6'/>
          <p>Assorted Tulip Bouquet</p>
        </div>
        <div>
          <img src='https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191310lx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}' alt='err-7'/>
          <p>Spring Sentiment™ Bouquet</p>
        </div>
        <div>
          <img src='https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191308lx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}' alt='err-8'/>
          <p>Pastel Posy™ Bouquet</p>
        </div>
        </div>

        <div className='free-shipping-poster' >
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltacd983b63a7ffb07/63c5ccc2eeda2410c17f4286/Post_Enrollment_Desktop_V2_Image_(2).png?quality=85&auto=webp&optimize={medium}' alt='free-shipping'></img>
        </div>
          
         <h2 style={{textAlign:"center"}}>  Share Your #MadeMeSmile Flowers Moment</h2>
        <div className='insta-icon-four-images'>
         <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltbcf30ced0a418919/63fcd5c452820c02597c04e3/ugc-image-fields-of-europe-spring.jpg?quality=85&auto=webp&optimize={medium}'/>
         <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt9536a0b1f715fd80/63fcd60582b5176dad0999c4/ugc-image-assorted-tulip-bouquet.jpg?quality=85&auto=webp&optimize={medium}'/>
         <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf96a2f03a42e1c17/63fcd62d16515710b8ed4694/ugc-image-sorbet-roses.jpg?quality=85&auto=webp&optimize={medium}'/>
         <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt205c41fe8e8ce8f6/63fcd65eff1d0646c816f367/ugc-image-marble-queen-pothos-plant.jpg?quality=85&auto=webp&optimize={medium}'/>
        </div>

      <h2 className='rating-heading'>Some of the Great Things Our Customers Say About Us</h2>
      <div className='rating'>
         <div>
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4c9be4e2d955776a/602a81580aba282006983f75/hp-reviews-final-167891.png?quality=70&auto=webp&optimize={medium}' alt='1st-img'/>
          <div className='start-color'>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          </div>
          <h5>Beautiful</h5>
          <p>"I bought these for my Nana's birthday she said they were amazingly beautiful!"</p>
          <h5>- Pamela</h5>
         </div>

         <div>
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt2b874f93791fce4a/62b09064482ba357e65ddbe8/web_icons_125x125_ocean_breeze_orchids.png?quality=60&auto=webp&optimize={medium}' alt='2nd-img'/>
          <div className='start-color'>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          </div>
          <h5>Best Flowers</h5>
          <p>"These flowers are beautiful and just as vibrant as the picture. One of the most beautiful bouquets I have ever seen!"</p>
          <h5>- Michelle</h5>
         </div>

         <div>
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blte0c04d8be69858b7/6259b075b9aa584a4e32649f/web_icons_125x125_classic_budding_rose.png?quality=60&auto=webp&optimize={medium}' alt='3-img'/>
          <div className='start-color'>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          </div>
          <h5>Very Happy!</h5>
          <p>"I love how the recipient can plant the roses and enjoy them for a long time. The plant is healthy and the candle I ordered with it smells great!"</p>
          <h5>- Betty</h5>
         </div>

         <div>
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt854645311f2a8ec4/621cf518ba043c4a2c4a9a54/web_icons_125x125_Gourmet_Drizzled_Berries-v2.png?quality=60&auto=webp&optimize={medium}' alt='4-img'/>
          <div className='start-color'>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          </div>
          <h5>Sweet Anniversary</h5>
          <p>"The strawberries arrived on time and were fantastics as always. Definitely made my anniversary a lot sweeter!"</p>
          <h5>- Brian</h5>
         </div>
      </div>
      <div className='powered-by-img'>
         <p>Powered by</p>
         <div>
           <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltcf637a6e16efdb8e/5ea9acbed4b10d15d3e8cfb3/yotpo-logo.png?quality=70&auto=webp&optimize={medium}'/>  
         </div>
         </div>
       <div>
        <img src={poster} alt="poster"/>
       </div>
       <div className='deliver-heading'>
      <h4>More About Our Flower Delivery <BiRightArrowAlt/></h4>

      <div className='color'>
        <h5>Send Flowers Online with Flower Delivery by 1-800-Flowers.com, the World's Favorite Florist!</h5>
      <p>There's no better place to order flowers online than 1-800-Flowers.com. Whether you're looking to buy flowers and gifts like roses, orchids, gift baskets, bonsai trees, flowering plants or wedding bouquets, we have the highest quality blooms and the most talented florists who can create exactly what you order. Dazzle and delight your loved ones wherever they may be with truly original flowers and gifts from 1-800-Flowers.com.</p>
      </div>
      <div className='color'>
        <h5>Quick Flower Delivery and Great Customer Service</h5>
      <p>Same-day flower delivery is available every day, for all seasons: spring, winter, summer and fall. To send flowers for same-day delivery, all you have to do is place your order by the following times in the gift receiver's time zone: 2:30 p.m. weekdays, 1:15 p.m. Saturdays, and 11:45 a.m. Sundays. Our customer service team is standing by to help you with any gift or flower order. Whether you're sending red roses to your sweetie, celebrating a birthday, or sending a get well gift to someone feeling under the weather, if you have questions, our team has answers! Just call 1-800-356-9377 or place an order for flower delivery online. We will help you find and deliver the perfect flowers, plants, or gift to celebrate life's most meaningful moments - from birthday gift recommendations, to anniversary floral arrangements she is sure to love.
      </p>
      <p> For sympathy gifts and funeral flowers, our team of experienced Sympathy Advisors are ready to assist you at 1-866-538-2259.</p>
      <div className='color'>
        <h5>Send Flowers Internationally</h5>
      <p>We deliver flowers across the United States and around the world. If you want to send flowers internationally, trust us to deliver your most heartfelt messages. Because of our partnerships with local florists and flower growers, we are able to ensure that bouquets are delivered fresh from the field and on time. Our flower arrangements are artfully created and delivered perfectly arranged by professional florists.</p>
      </div>
      </div>

      </div>


   <Footer/>

     </div>
    </>
  )
}

export default Home