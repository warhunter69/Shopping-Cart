import '../styles/Cart.css'

const Cart = () =>{
 return(
     <div>
    <div id="mySidepanel" class="sidepanel">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
  
  <button class="openbtn" onclick="openNav()">&#9776; Toggle Sidepanel</button>
  <h2>Collapsed Sidepanel</h2>
  <p>Content...</p>
  </div>
 )
}
export default Cart;