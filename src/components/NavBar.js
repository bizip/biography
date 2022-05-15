import linkedin from "../img/linkedin.svg";
import menu from "../img/menu.svg";


const NavBar = () => {
    return (
        <nav>
            <div className="nav__logo">
                <h1>Pascal</h1>
            </div>
            <ul className="nav__links">
                <li className="desktop"><a href="#Paractice">Practice Areas</a></li>
                <li className="desktop"><a href="#Paractice">People</a></li>
                <li className="desktop"><a href="#Paractice">Contact Us</a></li>
                <li className="desktop"><a href="#Paractice">Careers</a></li>
                <li className="desktop"><a href="#Paractice">Studio</a></li>
                <li><a href="#Paractice"><img src={linkedin} className="white" alt="Linkedin" /></a></li>
                <li><img src={menu} className="white" alt="menu" /></li>
            </ul>
        </nav>
    )
}
export default NavBar;