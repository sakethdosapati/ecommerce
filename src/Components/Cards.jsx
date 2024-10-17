import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
export default function Cards (){
    let [apidata,setApidata]=useState([]);
    let navigate=useNavigate();
    
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then(x=>x.json()).then(x=>
                    setApidata(x))

    },[])
    
   
    
    return(
        <div id="cards">
            
            {apidata.map(x=>{
                console.log([x]);
                
                return(
                    <div key={x.id} className='cardivs'>
                    <img src={x.image} alt="product image" />
                    <h4>{x.title.slice(0,10)}...</h4>
                    
                    <h3>${x.price}</h3>
                    
                    <h4>Rating: {x.rating.rate}</h4>
                    
                    <button id="buy" onClick={()=>navigate("/productpage",{state:{x}})}>Add to cart</button>
            </div>

                )
            })
            }
        </div>
    )
}