import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductDetails = () => {
  const [card, setCard] = useState([]);
  const { _id } = useParams();
  const brands = useLoaderData();
  console.log(brands);

  //   console.log(brands._id);

  useEffect(() => {
    const findData = brands.find((brand) => brand._id === _id);
    console.log(findData);
    setCard(findData);
  }, [_id, brands]);
  console.log(card);
  return (
    <div className="">
      <ProductDetail card={card}></ProductDetail>
    </div>
  );
};

export default ProductDetails;
