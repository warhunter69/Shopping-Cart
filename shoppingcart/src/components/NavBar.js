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
               
                <a href="/" className="cart"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg></a>
               
            </div>
        </header>
    )
}
export default NavBar;