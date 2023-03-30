import "../css/Product.css"
import axios from 'axios'
import { useEffect,useState } from 'react'
import Navbar from './Navbar'

function Product() {
const [data,setData] = useState([])
// useEffect(() => {
//   axios(
//     `http://localhost:8080/flowers`
//   )
//     .then((res) => setData(res.data))
//     .catch((err) => alert(err));
// }, []);
async function fetchApi(){
  try {
    const res =await axios.get(`http://localhost:8080/flowers`)
    setData(res.data)
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
  fetchApi()
},[])


console.log(data)
  return (
    <>
    <Navbar/>
    <div className='product'>
      {data.map((ele,ind)=>(
        <div  key={ind} className="elements">
        <img src={ele.avatar} alt="name"/>
        <p>{ele.title}</p>
        <p> Price - {ele.price}</p> 
        <button>Add to cart</button>
        </div>
      ))}
    </div>
</>
  )
}

export default Product

// http://localhost:8080/flowers