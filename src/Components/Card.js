import locationPin from "../Images/location-pin.png"
import "../Styling/Card.css"

const Card = (props) => {
    return ( 
        <section>
            <img src={props.element.imageUrl}/>
            <img src={locationPin} className="location-pin-img"/>
            <p>{props.element.location}</p>
            <h1>{props.element.title}</h1>
            <p>{props.element.startDate} - {props.element.endDate}</p>
            <p>{props.element.description}</p>
        </section>
     );
}
 
export default Card;