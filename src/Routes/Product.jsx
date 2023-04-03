import "../css/Product.css"
import axios from 'axios'
import { useEffect,useState } from 'react'
import Navbar from './Navbar'
import Footer from "../Components/Footer"
import { Box ,Text,Grid,Card,CardBody,Image,Stack,Heading,Divider,CardFooter,ButtonGroup,Button} from "@chakra-ui/react";
// import { Grid, GridItem } from "@chakra-ui/react";

import Cart from "../Components/Cart"
import { Spinner } from "@chakra-ui/react";
// import Pagination from "../Components/Pagination"

function Product() {
  const [data, setData] = useState([]);
  const [filterByColors, setFilterByColors] = useState([]);
  const [order, setOrder] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartItems3, setCartItems3] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:8080/flowers`, {
      params: {
        _sort: "price",
        _order: order
      }
    })
      .then((res) => res.data)
      .then(data => {
        let filteredData = data;
        if (filterByColors.length > 0) {
          filteredData = data.filter(data => filterByColors.includes(data.color));
        }
        setData(filteredData);
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, [order, filterByColors]);

  const handleColorChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFilterByColors(prev => [...prev, value]);
    } else {
      setFilterByColors(prev => prev.filter(color => color !== value));
    }
  }

  const handleCartfun = (id) => {
    return axios.get(`http://localhost:8080/flowers/${id}`);
  };

  const addToCart = (ele) => {
    handleCartfun(ele.id)
      .then((res) => {
        setCartItems(res.data);
        return axios.post("http://localhost:8080/cart", res.data);
      })
      .then(() => {
        alert("Product Added Successfully");
        getData();
      })
      .catch((err) => console.log(err));
  };

  const getData = () => {
    setIsLoading(true);
    axios.get(`http://localhost:8080/cart`)
      .then((res) => setCartItems3(res.data))
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageCount = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const pagedData = data.slice(startIndex, startIndex + pageSize);
// const addToCart = (ele) => {
//   // console.log(ele)
//   handleCartfun(ele.id) .then((res)=> setCartItems2(res.data))

//   async function handlePostData(){    
//   try {
//     let res= await fetch("http://localhost:8080/cart",{
//        method:"POST",
//            headers:{
//              'Content-Type' : 'application/json'
//            },
//            body:JSON.stringify(cartItems2)
//     });
  
//     alert("Product Added Successfuly")
//     // console.log(res)
//   } catch (error) {
//     console.log(error)
//   }
//  }

//  handlePostData();
// getData()
//  }
 
 
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
    {/* ----------------------------------------------------------------------------------------------------- */}
    <div className="makeit">
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
  {data.map((ele) => (
    <Card key={ele.id} maxW='xs'>
      <CardBody>
        <Image
          src={ele.avatar}
          alt={ele.title}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{ele.title}</Heading>
         
          <Text color='blue.600' fontSize='2xl'>
         Price - ₹{ele.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>

          <Button variant='ghost' colorScheme='blue' onClick={() => addToCart(ele)}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  ))}
</Grid>
</div>
    {/* ----------------------------------------------------------------------------------------------------- */}
    {/* <div className='product'>
      {data.map((ele,ind)=>(
        <div  key={ind} className="elements">
        <img src={ele.avatar} alt="name"/>
        <p>{ele.title}</p>
        <p> Price - {ele.price}</p> 
        <button style={{backgroundColor:"gray"}} onClick={() => addToCart(ele)}>Add to cart</button>
        </div>
      ))}
    </div> */}
    {/* </div> */}



</div>
    <Footer/>
</>
  )
          
}


export default Product;