import { useState, useEffect } from "react";
import menuIcon from "./icons8-menu-80(1).png";
import closeIcon from "./icons8-close-80(1).png";
import "./styles/PageNav.css";

function PageNav() {
  const [isActive, setIsActive] = useState(false);
  let screenWidth = Math.max(
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
  );

  useEffect(() => {
    function handleResize() {
      screenWidth = Math.max(
        document.body.offsetWidth,
        document.documentElement.offsetWidth
      );

      if (screenWidth > 998) {
        setIsActive(false);
      }
    }


    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, [])


  return (
    <nav className="UnNormal-page-nav">
      <Toggler
        toggle={isActive}
        onToggle={() => setIsActive(!isActive)}
      />
      <MenuList
        isOpen={isActive}
      />
    </nav>
  )
}


function Toggler({ toggle, onToggle }) {
  let openImage = menuIcon;
  let closeImage = closeIcon;
  let toggleImage = (toggle) ? closeImage : openImage;

  return (
    <button className="galaxy-nav-toggler" onClick={onToggle}>
      <img src={toggleImage} />
    </button>
  )
}

function MenuList({ isOpen }) {
  let openNav = isOpen ? 'open' : '';

  return (
    <ul className={`galaxy-nav-list ${openNav}`}>

      <li className="nav-item"><a href="#0" className="nav-link">About</a></li>
      <li className="nav-item"><a href="#0" className="nav-link">Schedule</a></li>
      <li className="nav-item"><a href="#0" className="nav-link">Sponsors</a></li>
      <li className="nav-item"><a href="#0" className="nav-link">Accomodation</a></li>
      <li className="nav-item"><a href="#0" className="nav-link">Contact</a></li>
    </ul>
  )

}


export default PageNav

