import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.css";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <nav className={`${classes.nav} ${show && classes.nav__black}`}>
      <img
        className={classes.nav__logo}
        src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
        alt="Netflix Logo"
      />

      <img
        className={classes.nav__avatar}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMLXMlOfq_uOypUzMeQ8rHpFmrlyF6pLVmQ&usqp=CAU"
        alt="Netflix Logo"
      />
    </nav>
  );
}

export default Navbar;
