import close from "../img/close.svg";
const Popup = () => {
    return (
        <div className="popup">
            <div className="popup__close"><img src={close} className="white" alt="close" /></div>
            <ul>
                <li><a href="#Paractice">Practice Areas</a></li>
                <li><a href="#Paractice">People</a></li>
                <li><a href="#Paractic">Contact Us</a></li>
                <li><a href="#Paracticee">Careers</a></li>
                <li><a href="#Paracti">Studio</a></li>
            </ul>

        </div>
    )
}
export default Popup;