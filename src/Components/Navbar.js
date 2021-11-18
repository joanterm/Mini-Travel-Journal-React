import worldIcon from "../Images/world.png"
import "../Styling/Navbar.css"

const Navbar = () => {
    return ( 
        <nav>
            <img src={worldIcon} className="nav--img" alt="world-icon"/>
            <h3>Famous World Destinations</h3>
        </nav>
     );
}
 
export default Navbar;