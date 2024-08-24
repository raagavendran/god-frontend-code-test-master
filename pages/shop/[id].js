import { useRouter } from "next/router";

const Shop = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  

  return (
    <div>
      <h1>Shop Page for Car ID: {id}</h1>
      {/* Fetch and display car details using the ID */}
    </div>
  );
};

export default Shop;
