import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="">
      <h3 className="my-10 text-4xl text-center font-bold">
        Our <span className="text-[#005B41]">Features</span>
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
        {brands.map((brand) => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
