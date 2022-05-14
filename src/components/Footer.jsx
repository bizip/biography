import twiter from "../img/twiter.svg";
import facebook from "../img/facebook.svg";
import linkedin from "../img/linkedin.svg";
import men from "../img/menu.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer__about">
        <h3>About</h3>
        <hr />
        <ul>
          <li>
            <a href="#HH">About Us</a>
          </li>
          <li>
            <a href="#HH">Careers</a>
          </li>
          <li>
            <a href="#HH">Legal notices</a>
          </li>
        </ul>
      </div>

      <div className="footer__about">
        <h3>Locations</h3>
        <hr />
        <ul>
          <li>
            <a href="#HH">About Us</a>
          </li>
          <li>
            <a href="#HH">Careers</a>
          </li>
          <li>
            <a href="#HH">Legal notices</a>
          </li>
        </ul>
      </div>

      <div className="footer__about">
        <h3>Connect</h3>
        <hr />
        <ul>
          <li className="social">
            <a href="#HH">
              <img src={twiter} alt="social" />
            </a>
          </li>
          <li className="social">
            <a href="#HH">
              <img src={facebook} alt="social" />
            </a>
          </li>
          <li className="social">
            <a href="social">
              <img src={linkedin} alt="social" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
