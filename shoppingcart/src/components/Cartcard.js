import '../styles/Cartcard.css'
const Cartcard = (props) => {
    return (

        <div className="card">

            <img className='card_img' src={props.src} alt={props.name} />
            <span className='card_span' >{props.name}</span>


        </div>
    )
}
export default Cartcard;