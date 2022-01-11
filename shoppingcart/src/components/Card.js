import { useState } from 'react';
import '../styles/Card.css'
const Card = (props) =>{
    const [hover, setHover] = useState();
    const [qnty,setQnty] = useState(1);
    const handleMouseIn = () => {
      setHover(true);
    };
  
    const handleMouseOut = () => {
      setHover(false);
    };
    const handleChange = (event) =>{
      const value = parseInt(event.target.value, 10) ;
      setQnty(value);
    }
    
    return(
        <div className="card" onClick={props.clickCard} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
           
               <img className='card_img' src={props.src} alt={props.name} />
               <span className='card_span' >{props.name}</span>
               <div className="input_group" hidden={!hover}>
                  <label>quantity
                  <input type="number" className='input_qnty' min='1' name="quantity" onInput={handleChange}/>
                  </label>
                  <button  className='btn' onClick={(e)=>props.addtoCart({name:props.name,img:props.src,qnty:qnty},e)}>
                          add to cart
                  </button>

                </div>
        </div>
    )
}
export  default Card;