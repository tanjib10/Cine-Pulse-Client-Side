/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const ProductDetail = ({ card }) => {
  const { image, details, name, brandTitle } = card;
  return (
    <div className="max-w-6xl mx-auto">
      <img className="mt-10 mx-auto w-5/6 h-[90vh]" src={image} />
      <div>
        <h3 className="mt-4 text-xl text-center font-bold text-amber-800 ">
          {name}
        </h3>
        <p className="text-center">Watch it now on {brandTitle} </p>
        <p className="text-center text-green-600">{details}</p>
        <button className="btn btn-primary block mx-auto mt-3">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
