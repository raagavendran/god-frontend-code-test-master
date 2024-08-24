import { useRouter } from "next/router";
import React from "react";

const Learn = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Learn Page for Car ID: {id}</h1>
      {/* Fetch and display car details using the ID */}
    </div>
  );
};

export default Learn;