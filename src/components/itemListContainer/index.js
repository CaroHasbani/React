import React, { useEffect, useState } from "react";
import Itemlist from "../containers/Itemlist";
import "./styles.css"
const ItemlistContainer = ({greetings}) => {

    const [products, setProducts] = useState([]);
    const stock=10;

    useEffect(()=> {
     
      ( async ()=> {
          try {
              const response = await fetch('https://jsonplaceholder.typicode.com/posts');
              const data = await response.json();
              setProducts(data);
          } catch (error) {
              console.log(error);
          }
      })()
  
  }, [])



  return (
      <>
        <div className="contenedor-card">
        <Itemlist 
        products={products}
        stock={stock}/>
        </div>
        </>
  )
}

export default ItemlistContainer;