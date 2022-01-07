import '../styles/NavBar.css';
import cat_logo from '../files/cat_logo2.png'
const NavBar = () =>{
    return(
        <header className="sticky-bar">
            <div className="container">
                <a className="title" href="/"><img className="logo"src={cat_logo} alt={"cat_logo"}/><span className="logo_span">Pet Shop</span></a>
            
                <a href="/shop">Cats</a>
                <a href="/">Dogs</a>
                <a href="/">Fish</a>
                <a href="/">Birds</a>
                <a href="/">Reptiles</a>
               
                <a href="/" className="cart">Cart</a>
               
            </div>
        </header>
    )
}
export default NavBar;