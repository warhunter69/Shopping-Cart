import { useState } from 'react/cjs/react.development'
import '../styles/Cart.css'

const Cart = () =>{
    const [width,setWidth] = useState("0px");
    const openCart = () =>{
        //
        setWidth("250px")
    }
    const closeCart = () =>{
        //
        setWidth("0px")
    }
 return(
     <>
    <div id="mySidepanel" class="sidepanel" style={{width:width}}>
    <a href="javascript:void(0)" class="closebtn" onClick={closeCart}>&times;</a>
    <h1>About</h1>
    <h1 >Services</h1>
    <h1 >Clients</h1>
    <h1 >Contact</h1>
  </div>
  
  <button className="cart_btn" onClick={openCart}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg></button>
  </>
 )
}
export default Cart;