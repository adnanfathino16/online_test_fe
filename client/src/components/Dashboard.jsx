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
    <div className="w-full xl:w-4/5">
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

      <div className="bg-slate-100 flex justify-center items-center">
        <div className="bg-white w-[90%] h-[95%] rounded-md flex justify-center items-center">
          <div className="w-[90%]">
            <Navigation />
            <Table />
          </div>
        </div>
      </div>

      <Pagination />

      <Footer />
    </div>
  );
};

export default Dashboard;
