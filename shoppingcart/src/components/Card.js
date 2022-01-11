import { useState } from 'react';
import '../styles/Card.css'
const Card = (props) =>{
    const [hover, setHover] = useState();

    const handleMouseIn = () => {
      setHover(true);
    };
  
    const handleMouseOut = () => {
      setHover(false);
    };
  
    return(
        <div className="card" onClick={props.clickCard} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
           
               <img className='card_img' src={props.src} alt={props.name} />
               <span className='card_span' >{props.name}</span>
               <div className="input_group" hidden={!hover}>
                  <label>quantity
                  <input type="number" className='input_qnty' min='1' name="quantity"/>
                  </label>
                  <button  className='btn' onClick={props.addtoCart}>
                          add to cart
                  </button>

                </div>
        </div>
    )
}
export  default Card;