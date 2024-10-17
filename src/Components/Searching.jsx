import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Searching (){
    let navigate=useNavigate();
    let [apidata,setApidata]=useState([]);
    let [search,setSearch]=useState("");
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then(x=>x.json()).then(x=>
                    setApidata(x))

    })
    return(
        <div id="one">
        <div id="div1">
            
            <h2>Welcome to FakeStore</h2>
            
            <input id="input" type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="Explore Now"/>
           
        </div>
        <div id="cards">

        {apidata.filter(x=>x.title.toLowerCase().includes(search)).map((x,y)=>{
            return(
                
                    <div key={x.id} className='cardivs'>
                    <img src={x.image} alt="product image" />
                    <h4>{x.title.slice(0,10)}...</h4>
                    
                    <h3>${x.price}</h3>
                    
                    <h4>Rating: {x.rating.rate}</h4>
                    
                    <button id="buy" onClick={()=>navigate("/productpage",{state:{x}})}>Add to cart</button>
            </div>
                
               )
            })}
            </div>
        </div>
        
    
    
    )
}






     