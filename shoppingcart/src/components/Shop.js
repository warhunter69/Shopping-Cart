import NavBar from './NavBar'
import Card from './Card';
import '../styles/Shop.css';

const Shop = (props) =>{
    
    return(
        <>
        <NavBar/>
        <main className='main'>
            <div className='banner'>
            <h1>{props.name}</h1>
            </div>
            <div className='card_container'>
            {props.cards.map((card, index) => ( <Card key={index} src={card.image} name ={card.name}/> ))}
        
                
               
            
            </div>
        </main>
        </>
    )
}
export default Shop;