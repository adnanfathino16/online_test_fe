import logo from "../assets/logo.jpg";
import { FiUser } from "react-icons/fi";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { GoPencil, GoHome, GoChevronDown } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { triggerNavbar } from "../redux/slices/navbarSlice";

const Navbar = () => {
  const navbar = useSelector((state) => state.navbar.button);
  const dispatch = useDispatch();
  return (
    <div id="navbar" className={`bg-sky-950 w-[300px] xl:w-1/5 h-[689px] xl:left-0 absolute z-50 xl:static bottom-0 top-0 ${navbar ? "left-0" : "-left-full"} transition-all`}>
      <div className="mb-10 p-5 flex flex-col gap-2">
        <img className="w-10" src={logo} alt="logo" />
        <h2 className="text-white">Yoseph Duna</h2>
        <p className="text-gray-400 text-sm">Author</p>
      </div>
      <div className="flex flex-col">
        <div id="dashboard" className={`text-white flex items-center gap-2 hover:bg-blue-950 p-3`}>
          <GoHome />
          <h2>Dashboard</h2>
        </div>
        <div id="management" className="text-white flex items-center gap-2 hover:bg-blue-950 p-3">
          <FiUser />
          <h2>User Management</h2>
        </div>
        <div id="news" className="text-white flex justify-between items-center hover:bg-blue-950 p-3">
          <div className="flex items-center gap-2">
            <GoPencil />
            <h2>News</h2>
          </div>
          <GoChevronDown />
        </div>
      </div>
      <button className="xl:hidden flex justify-center items-center bg-white border border-slate-300 text-slate-500 absolute left-[275px] w-10 h-10 rounded-full" onClick={() => dispatch(triggerNavbar(false))}>
        <AiOutlineDoubleLeft />
      </button>
    </div>
  );
};

export default Navbar;
