import { useState } from 'react/cjs/react.development'
import '../styles/Cart.css'
import Cartcard from './Cartcard';

const Cart = (props) =>{
    const [width,setWidth] = useState("0%");
    const [id,setId] = useState("mySidepanel");
    const [width2,setWidth2] = useState("0%");
    const openCart = () =>{
        //
        setWidth("40%");
        setWidth2("60%");
    }
    const closeCart = () =>{
        //
        setWidth("0%");
        setWidth2("0%");
    }
    const test = (e) =>{
        console.log(e.target.id)
        const targetId = e.target.id;
        if(targetId !== id){
            setWidth(0);
        }
        //will have to be done from router to put click on body
        
    }
 return(
     <>
    <div className='sidepanel2' style={{width:width2}} ></div>
    <div id="mySidepanel" className="sidepanel" style={{width:width}} >
    {/*<a href="javascript:void(0)" class="closebtn" onClick={closeCart}>&times;</a>}*/}
    <button className="closebtn" onClick={closeCart}>&times;</button>
    <div className="Sidecontainer">
    {props.Cartcards.map((card, index) => ( <Cartcard key={index} img={card.img} name ={card.name}/> ))}
    </div>
  </div>
  
  <button className="cart_btn" onClick={openCart}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg></button>
  </>
 )
}
export default Cart;