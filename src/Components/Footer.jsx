import React from 'react'
import "../css/Footer.css"
import 'typeface-poppins';
import follow from "../images/follow.png"

function Footer() {
  return (

   <div className='footer-container'>
   <div>
    <h5>MORE WAYS TO SHOP</h5>
    <h6>Flower Deliver Same-Day</h6>
    <h6>Flowers Arrangements</h6>
    <h6>Sympathy Flowers & Gifts</h6>
    <h6>Roses</h6>
    <h6>Birthday Flowers & Gifts</h6>
    <h6>Flower Subscriptions</h6>
    <h6>Plants</h6>
    <h6>Gift Baskets &Food</h6>
    <h6>Easter Flowers</h6>
    <h6>Mother's Day Flowers</h6>
    <h6>International Flower Delivery</h6>
    <h6>Find a Local Florist</h6>
    <h6>Corporate Gifts</h6>
    <h6>Chocolate Covered</h6>
    <h6>Marketplace Sellers</h6>
   </div>

   <div>
    <h5>CUSTOMER SERVICE</h5>
    <h6>Customer Service</h6>
    <h6>COVID-19 Updates</h6>
    <h6>eGift Cards</h6>
    <h6>Contact Us</h6>
    <h6>Do Not Sell My Personal</h6>
    <h6>Information</h6>
    <h6>Allergy Warning</h6>
    <h6>Funeral/Sympathy Advisors</h6>
    <h6>Smile Guarantee</h6>
    <h5>VETERANS ADVANTAGE</h5>
    <h6>Get Exclusive Military</h6>
    <h6>Discounts Everyday</h6>
   </div>

   <div>
    <h5>OUR STORES</h5>
    <h6>Store Locator</h6>
    <h6>Franchise Opportunities</h6>
    <h6>Local DIY Events</h6>
    <h6>ACCOUNT LOGIN</h6>
    <h6>Sign In to Your Account</h6>
   </div>

   <div>
    <h5>CORPORATE</h5>
    <h6>About Us</h6>
    <h6>Our Brands</h6>
    <h6>Social Responsibility</h6>
    <h6>Careers</h6>
    <h6>News& Media</h6>
    <h6>Investors</h6>

    <h5>AFFILIATE PROGRAM</h5>
    <h6>Become an Affiliate</h6>

    <h5>OUR BLOG</h5>
    <h6>Petal Talk Blog</h6>
    <h6>Julie's Corner</h6>
    <h6>Jim's Corner</h6>
   </div>

   <div className='follow'>
    <h5>FOLLOW US</h5>
    <img src={follow} alt='follow'/>
   </div>




   </div>
  )
}

export default Footer