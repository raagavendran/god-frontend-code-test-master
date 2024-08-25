import { useRouter } from "next/router";
import React from "react";
import Header from "../../src/components/generic/header/Header";

const Learn = () => {
  const router = useRouter();
  //get id from url
  const { id } = router.query;

  return (
    <div>
      <Header />
      <h1>Learn Page for Car ID: {id}</h1>
    </div>
  );
};

export default Learn;