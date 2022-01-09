import NavBar from './NavBar'
import Card from './Card';
import '../styles/Shop.css';
import { useEffect, useState } from 'react';

const Shop = (props) =>{
    const [items,setItems] = useState([]);
    const clickCard = (e) =>{
        //console.log(e.target);
        const name = e.target.alt;
        setItems(items => [...items, name]);
    }
    useEffect(()=>{
        console.log(items);
    },[items])

    return(
        <>
        <NavBar/>
        <main className='main'>
            <div className='banner'>
            <h1>{props.name}</h1>
            </div>
            <div className='card_container'>
            {props.cards.map((card, index) => ( <Card key={index} src={card.image} name ={card.name} clickCard={clickCard}/> ))}
        
                
               
            
            </div>
        </main>
        </>
    )
}
export default Shop;