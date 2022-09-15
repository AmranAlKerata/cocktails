import { Fragment } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
const Sharedlayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};

export default Sharedlayout;
