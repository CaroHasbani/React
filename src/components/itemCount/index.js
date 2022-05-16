/* eslint-disable jsx-a11y/alt-text */
import "./style.css";
import { useState } from 'react';

const ItemCount = ({products, stock}) =>{
    const [count, setCount]= useState(0);
    const  addProduct=()=>{setCount(count + 1)
        if (count >= stock) {
            setCount(count + 0)
            alert("No hay mas unidades disponibles en este momento")
          }
    }
    const  dropProduct=()=>{setCount(count - 1)
        if (count < 1) {
            setCount(count + 0)
          }
    }

    return(
        <div className="card">
            <div className="id">{products.id}</div>
    <div className="titulo">{products.title}</div>
    <div><img className="imagen" src={products.image} /></div>
    <div className="precio">$ {products.price}</div>
      <div className="buttons">
      <button className="button button4"  onClick={dropProduct}>-</button>
        <div className="counter"> {count}</div>
        <button className="button button5" onClick={addProduct}>+</button>
      </div>
    </div>
    )
}
export default ItemCount