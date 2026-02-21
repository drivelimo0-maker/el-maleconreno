import { isArray } from "lodash";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function MenuItem({ props, closeMenu }) {
  const [showMenu, setShowMenu] = useState(false);

  const showsubnav = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (e) => {
    if (closeMenu) {
      closeMenu();
    }
  };

  const showActive = classNames("ak-munu_dropdown_toggle", {
    active: showMenu,
  });

  const showActivePrent = classNames("menu-item-has-children", {
    active: showMenu,
  });

  return (
    <li className={showActivePrent}>
      <Link to={props.link} onClick={handleLinkClick}>{props.title}</Link>
      {isArray(props.childern) && (
        <>
          <ul>
            {props?.childern?.map((child) => (
              <li key={child.key}>
                <Link to={child.link} onClick={handleLinkClick}>{child.title}</Link>
              </li>
            ))}
          </ul>
          <span className={showActive} onClick={showsubnav}></span>
        </>
      )}
    </li>
  );
}
