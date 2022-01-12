import '../styles/Cartcard.css'
const Cartcard = (props) => {
    return (

        <div className="card" >

            <img className='card_img' src={props.img} alt={props.name} />
            <span className='card_span' >{props.name}</span>
            <span className='card_span' >Qnty:{props.qnty}</span>
            <span className='card_span' >price:{props.qnty*props.price}</span>


        </div>
    )
}
export default Cartcard;