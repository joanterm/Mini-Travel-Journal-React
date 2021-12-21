import locationPin from "../Images/location-pin.png"
import emptyHeart from "../Images/empty-heart.png"
import redHeart from "../Images/red-heart.png"
import "../Styling/Card.css"
import { useState } from "react"

const Card = (props) => {
    const [newFavorite, setNewFavorite] = useState(props.element.favorite)

    const toggleFavorite = () => {
        console.log(newFavorite)
        setNewFavorite((prev) => {
            return !prev
        })
    }
    return (
        <section>
            <div className="card">
                <img src={props.element.imageUrl} className="card--img" alt="location"/>
                <div className="location-info">
                    <div className="location-name">
                        <img src={locationPin} className="location-pin-img" alt="location-pin"/>
                        <p>{props.element.location}</p>
                    </div>
                    <h1>{props.element.title}</h1>
                    <p className="location-info--dates">{props.element.startDate} - {props.element.endDate}</p>
                    <p>{props.element.description}</p>
                    <div className="location-info--favorite">
                        {newFavorite ? <img className="location-info--favorite--heart" src={redHeart} onClick={toggleFavorite}/> : <img className="location-info--favorite--heart" src={emptyHeart} onClick={toggleFavorite}/>}
                    </div>
                </div>
            </div>
        </section> 
     );
}
 
export default Card;