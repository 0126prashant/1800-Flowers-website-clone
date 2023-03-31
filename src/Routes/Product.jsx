import "../css/Product.css"
import axios from 'axios'
import { useEffect,useState } from 'react'
import Navbar from './Navbar'
import Footer from "../Components/Footer"
import Cart from "../Components/Cart"

function Product() {
const [data,setData] = useState([])
const [filterByColors, setFilterByColors] = useState([]);
const [order, setOrder] = useState(null);
const [cartItems, setCartItems] = useState([]);


console.log(order)
useEffect(() => {
  axios.get(`http://localhost:8080/flowers`,{
  params :{
    _sort:"price",
    _order : order
  }
  } )
    .then((res) => res.data)
    .then(data =>{
      let filteredData =data ;
        if (filterByColors.length>0) {
          filteredData = data.filter(data =>filterByColors.includes(data.color));
        }
        setData(filteredData)
    })

    .catch((err) => alert(err));
}, [order,filterByColors]);

const handleColorChange = (event) => {
  const { value, checked } = event.target;
  if (checked) {
    setFilterByColors(prev => [...prev, value]);
  } else {
    setFilterByColors(prev => prev.filter(color => color !== value));
  }
}
// async function fetchApi(){
//   try {
//     const res =await axios.get(`http://localhost:8080/flowers`)
//     setData(res.data)
    

//   } catch (error) {
//     console.log(error)
//   }
// }
// useEffect(()=>{
//   fetchApi()
// },[filterByColor])

const addToCart = (data) => {
  setCartItems(prev => [...prev, data]);
}

// console.log(data)
console.log(cartItems)
  return (
    <>
    <Navbar/>
    {/* ---------------sort---by-----price------------------- */}
    
    <div className="all-product">
    <div className="side-bar" style={{padding:"10px",border:"1px solid "}}>
    <label>
        Sort by Price:
        <select value={order} onChange={(event) => setOrder(event.target.value)}>
          <option value="">Select by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </label>

      <br/>
  <div style={{marginTop:"20px"}}>
    <label>
        Filter by color 
        <br />
        <input type="checkbox" id="red" name="red" value="red" checked={filterByColors.includes("red")} onChange={handleColorChange} />
        <label htmlFor="red">Red</label>
        <br />

        <input type="checkbox" id="blue" name="blue" value="blue" checked={filterByColors.includes("blue")} onChange={handleColorChange} />
        <label htmlFor="blue">Blue</label>
        <br />
        <input type="checkbox" id="pink" name="pink" value="pink" checked={filterByColors.includes("pink")} onChange={handleColorChange} />
        <label htmlFor="pink">Pink</label>
        <br />
        <input type="checkbox" id="white" name="white" value="white" checked={filterByColors.includes("white")} onChange={handleColorChange} />
        <label htmlFor="white">White</label>
        <br />
        <input type="checkbox" id="multicolor" name="multicolor" value="multicolor" checked={filterByColors.includes("multicolor")} onChange={handleColorChange} />
        <label htmlFor="multicolor">Multicolor</label>
        <br />
        <input type="checkbox" id="purple" name="purple" value="purple" checked={filterByColors.includes("purple")} onChange={handleColorChange} />
        <label htmlFor="purple">Purple</label>
        <br />
        <input type="checkbox" id="violet" name="violet" value="violet" checked={filterByColors.includes("violet")} onChange={handleColorChange} />
        <label htmlFor="violet">Violet</label>
        <br />


        <input type="checkbox" id="yellow" name="yellow" value="yellow" checked={filterByColors.includes("yellow")} onChange={handleColorChange} />
        <label htmlFor="yellow">Yellow</label>
      </label>
      </div>


    </div>
    <div className='product'>
      {data.map((ele,ind)=>(
        <div  key={ind} className="elements">
        <img src={ele.avatar} alt="name"/>
        <p>{ele.title}</p>
        <p> Price - {ele.price}</p> 
        <button onClick={() => addToCart(ele)}>Add to cart</button>
        </div>
      ))}
    </div>


    </div>
    <Cart props={cartItems}/>
    <Footer/>
</>
  )
}

export default Product

// http://localhost:8080/flowers