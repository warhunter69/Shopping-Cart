import '../styles/NavBar.css';

const NavBar = () =>{
    return(
        <header className="sticky-bar">
            <div className="container">
                <a className="title" href="/">App</a>
                <a href="/shop">Shop</a>
            </div>
        </header>
    )
}
export default NavBar;