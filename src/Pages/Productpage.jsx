import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
const Productpage = () => {
    let location=useLocation();
    let productdata=location.state.x;
    let [Count, setCount] = useState(0);
    let navigate=useNavigate();
  return (<>
  <nav>
            <h1 onClick={()=>navigate("/")}>E-Store</h1>
            <h2>Your Cart</h2>
        </nav>

    <div id="pagediv">
        
        <img id="proimg"src={productdata.image} alt="" />
        <div id="productdetails">
          <h1>{productdata.title}</h1>
        <h4 id="">Category:{productdata.category}</h4>
        <h2>${productdata.price}</h2>
        <h6>{productdata.description}</h6>
        <h4>Rating: {productdata.rating.rate}</h4>
        <div id="counterdiv">
        <button id="buy">Buy Now</button>
          <div id="cdiv2"><h4>Quantity:</h4>
          <button className="countbutton" onClick={()=>setCount(Count + 1)}>+</button>
          <span id="count"> {Count} </span>
          <button className="countbutton" onClick={()=>setCount(Count - 1)}>-</button>
        </div>  
        
         </div>
     </div>
      
    </div>
    </>)
}

export default Productpage
