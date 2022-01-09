import '../styles/NavBar.css';
import cat_logo from '../files/cat_logo2.png'
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <header className="sticky-bar">
            <div className="container">
                <Link className="title" to="/"><img className="logo"src={cat_logo} alt={"cat_logo"}/><span className="logo_span">Pet Shop</span></Link>
            
                <Link to="/shop/cats">Cats</Link>
                <Link to="/shop/cats">Dogs</Link>
                <a href="/" rel="no-refresh">Fish</a>
                <a href="/">Birds</a>
                <a href="/">Reptiles</a>
               
                <a href="/" className="cart">Cart</a>
               
            </div>
        </header>
    )
}
export default NavBar;