import { useRouter } from "next/router";
import Header from "../../src/components/generic/header/Header";
const Shop = () => {
  const router = useRouter();
  //get id from url
  const { id } = router.query;

  return (
    <div>
      <Header />
      <h1>Shop Page for Car ID: {id}</h1>
    </div>
  );
};

export default Shop;
