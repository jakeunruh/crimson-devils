import Logo from "../img/logo.svg";
import "../styles/header-small.scss";
import React from "react";

function HeaderSmall() {
  return (
    <header className="header-small">
      <img className="header-small__img--logo" src={Logo} alt="Crimson Devils" />
    </header>
  )
}

export default HeaderSmall