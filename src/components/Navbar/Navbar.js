import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../images/netflix-logo.png";
import avatar from "../../images/Netflix-avatar.png";

const Navbar = () => {
  const [show, setShow] = useState('transperent');
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setShow('#111');
      } else {
        setShow('transparent');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="nav" id="navbar" style={{ show }}>
      <img src={logo} alt="Netflix Logo" className="nav__logo" />
      <img src={avatar} alt="Netflix Avatar" className="nav__avatar" />
    </div>
   
  );
};

export default Navbar;
