import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Brand = ({ brand }) => {
  // eslint-disable-next-line no-unused-vars
  const { id, image, brandTitle } = brand;
  return (
    <Link to={`/brandDetails/${brandTitle}`}>
      <div className="ml-6 cursor-pointer lg:ml-0">
        <div className="card w-96 h-72 bg-base-100 shadow-xl">
          <figure>
            <img className="w-full object-cover" src={image} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="font-bold text-2xl">{brandTitle}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Brand;
