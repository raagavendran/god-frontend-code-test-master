// Home page component, it contains Header and Body
import React, { useState, useEffect } from "react";
import Header from "./generic/header/Header";
import Body from "./body/Body";

export const Home: React.FC = (props) => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
