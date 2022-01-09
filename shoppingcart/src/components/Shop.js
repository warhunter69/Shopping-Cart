import NavBar from './NavBar'
import Card from './Card';
import '../styles/Shop.css';
import { useState } from 'react';

const Shop = (props) =>{
    const [items,setItems] = useState([]);
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