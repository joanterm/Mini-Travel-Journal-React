import locationPin from "../Images/location-pin.png"
import "../Styling/Card.css"

const Card = (props) => {
    return ( 
        <section className="card">
            <img src={props.element.imageUrl} className="card--img" alt="location"/>
            <div className="location-info">
                <div className="location-name">
                    <img src={locationPin} className="location-pin-img" alt="location-pin"/>
                    <p>{props.element.location}</p>
                </div>
                <h1>{props.element.title}</h1>
                <p className="location-info--dates">{props.element.startDate} - {props.element.endDate}</p>
                <p>{props.element.description}</p>
            </div>
        </section>
     );
}
 
export default Card;