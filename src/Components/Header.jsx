import "./Header.css";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaTwitter,
} from "react-icons/fa6";
function Header() {
  return (
    <div className="header">
      <div className="header1">
        <div className="box1">
          <div className="box11"></div>
        </div>

        <div className="box2">
          {" "}
          <h4 className="school-iso">
            An ISO 9001:2015 Certified English Medium School
          </h4>
          <h1 className="school-name"> KOSI CENTRAL SCHOOL</h1>
          <h5 className="school-affiliate">
            {" "}
            Affiliated to CBSE, Delhi, Aff no. – 330437, School No. – 65443
          </h5>
        </div>
        <div className="box3">
          <h6 className="contact">Contact Us</h6>
          <h6 className="contact">+918306709245</h6>
          <div className="icons">
            <div className="icon">
              <a href="" className="link">
                <FaFacebook className="icon11" />
              </a>
            </div>
            <div className="icon">
              <a href="" className="link">
                <FaInstagram className="icon11" />
              </a>
            </div>
            <div className="icon">
              <a href="" className="link">
                <FaXTwitter className="icon11" />
              </a>
            </div>
            <div className="icon">
              <a href="" className="link">
                {" "}
                <FaTwitter className="icon11" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
