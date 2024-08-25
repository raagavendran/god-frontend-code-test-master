import React from "react";
import Headerstyles from "./Header.module.scss";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  // Home page route on logo click
  const redirectHome = () => {
    router.push(`/`);
  };
  return (
    <header className={Headerstyles.header}>
      <h1 className={Headerstyles.companyName} onClick={redirectHome}>
        VOLVO
      </h1>
    </header>
  );
};

export default Header;
