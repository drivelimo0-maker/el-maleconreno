import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import logo from "/assets/img/logo/logo.png";

import navitemlist from "../../dataJson/navitemlist.json";

export default function NavMenu() {
  const [navBar, setNavbar] = useState("");
  const [navlist, setNavList] = useState("");
  const location = useLocation();

  // Close menu whenever pathname changes
  useEffect(() => {
    setNavbar("");
    setNavList("");
  }, [location.pathname]);

  const navBarShow = () => {
    if (navBar == "") {
      setNavbar("ak-toggle_active");
    } else {
      setNavbar("");
    }

    if (navlist == "") {
      setNavList("ak-show-moblie-nav-list");
    } else {
      setNavList("");
    }
  };

  const closeMenu = () => {
    setNavbar("");
    setNavList("");
  };

  return (
    <div className="ak-main_header">
      <div className="ak-nav-container">
        <div className="ak-main_header_in">
          <div className="ak-main_header_left">
            <Link className="ak-site_branding" to="/" onClick={closeMenu}>
              <img src={logo} alt="..." width={50} height={70} />
            </Link>
          </div>
          <div className="ak-main_header_right">
            <div className="ak-nav ak-medium">
              <ul id="ak-nav_list" className={`ak-nav_list ${navlist}`}>
                {navitemlist?.map((item, i) => {
                  return <MenuItem props={item} key={i} closeMenu={closeMenu} />;
                })}
              </ul>
              <span
                onClick={() => navBarShow()}
                id="navBar"
                className={`ak-munu_toggle ${navBar}`}
              >
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
