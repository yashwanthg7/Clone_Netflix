import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../public/netflix-logo.png";
import avatar from "../../public/Netflix-avatar.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    handleScroll();
  }, []);

  return (
    <div className="nav" id="navbar" >
      <img src={logo} alt="Netflix Logo" className="nav__logo" />
      <img src={avatar} alt="Netflix Avatar" className="nav__avatar" />
    </div>
   
  );
};

export default Navbar;
