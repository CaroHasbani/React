/* eslint-disable jsx-a11y/alt-text */
import "./styles.css"

const ItemDetail = ({personaje}) => {
  return (
    <>
            <div className='card'>
              <div className='tit'>{personaje.name}</div>
              <img src={personaje.image}></img>
            </div>

        </>
  )
}

export default ItemDetail