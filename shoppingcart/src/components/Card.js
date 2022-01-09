import '../styles/Card.css'
const Card = (props) =>{
    return(
        <div className="card" onClick={props.clickCard}>
               <img className='card_img' src={props.src} alt={props.name}/>
               <span className='card_span'>{props.name}</span>
        </div>
    )
}
export  default Card;