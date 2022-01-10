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
               <button  >
                        {hover ? "foo" : "bar"}
                </button>
                <input type="number" id="quantity" name="quantity"/>

               </div>
        </div>
    )
}
export  default Card;