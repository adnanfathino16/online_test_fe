import { RxHamburgerMenu } from "react-icons/rx";
import { RiShutDownLine } from "react-icons/ri";

import Table from "./Table";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Pagination from "./Pagination";
import { useDispatch } from "react-redux";
import { triggerNavbar } from "../redux/slices/navbarSlice";
import AddUser from "./AddUser";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-full w-full xl:w-4/5">
      <div className="py-3 px-7 bg-white flex gap-5 items-center">
        <button className="xl:hidden py-1 px-2 text-white bg-sky-950 rounded" onClick={() => dispatch(triggerNavbar(true))}>
          <RxHamburgerMenu />
        </button>
        <div className="flex justify-between w-full">
          <h2 className="text-sky-950 hidden lg:block">
            <span className="font-semibold">Loan Market </span>/ User Management
          </h2>
          <button className="flex items-center gap-1" type="button">
            <RiShutDownLine />
            Log out
          </button>
        </div>
      </div>

      <div className="bg-slate-100 py-2 px-5 flex justify-end">
        <AddUser />
      </div>

      <div className="w-full mx-auto h-[460px] bg-white px-1 py-5 mb-4">
        <div className="md:w-[90%] mx-auto rounded-md">
          <Navigation />
          <Table />
        </div>
      </div>

      <Pagination />

      <Footer />
    </div>
  );
};

export default Dashboard;
