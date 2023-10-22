const Contact = () => {
  return (
    <div>
      <h3 className="text-4xl font-bold text-center ">
        <span className="text-[#232D3F]">Contact</span> us
      </h3>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-[#008170] font-bold">Contact now!</h1>
            <p className="py-6">
              We are here to provide you with the latest movie information,
              showtimes, and a fantastic movie-watching experience. If you have
              any questions, feedback, or need assistance, do not hesitate to
              get in touch with us.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your message</span>
                </label>
                <textarea
                  rows={30}
                  type="text"
                  placeholder="Your message"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
