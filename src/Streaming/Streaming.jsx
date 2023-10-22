import { useEffect, useState } from "react";

const Streaming = () => {
  const [stream, setStream] = useState([]);
  useEffect(() => {
    fetch("/streaming.json")
      .then((res) => res.json())
      .then((data) => setStream(data));
  }, []);
  return (
    <div>
      <h3 className="my-24 text-4xl font-bold text-center">
        <span className="text-[#008170]">Streaming</span>Now!
        <div className="mt-6 ml-6 lg:ml-0  grid grid-cols-1 gap-5 lg:grid-cols-3">
          {stream.map((movie) => (
            <div key={movie.id}>
              <div className="card w-96 h-72 bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <h2 className="text-xl text-center">{movie.title}</h2>
                </div>
                <figure>
                  <img
                    className="w-full h-full object-cover content-center"
                    src={movie.poster_url}
                    alt="Shoes"
                  />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </h3>
    </div>
  );
};

export default Streaming;
