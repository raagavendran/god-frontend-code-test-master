import React from "react";
import Headerstyles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={Headerstyles.header}>
      <h1 className={Headerstyles.companyName}>VOLVO</h1>
    </header>
  );
};

export default Header;
