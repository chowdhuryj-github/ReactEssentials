

import Logo from "../assets/image.png";
import "./header.css";

// all components will have first letter capital

export const Header = () => {
  return (
    <div>
        <img className="logo"  src={Logo} alt="Apple Logo" />
    </div>
  ) 
}