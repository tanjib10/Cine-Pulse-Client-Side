import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-display">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
