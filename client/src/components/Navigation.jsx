import { BsSearch } from "react-icons/bs";
import { RiFilter2Line } from "react-icons/ri";

const Navigation = () => {
  return (
    <div className="pt-5">
      <div className="relative p-2 w-full flex gap-2 bg-gray-50 mb-5 rounded-md">
        <label htmlFor="search" className="absolute left-5 top-4 text-slate-400 cursor-pointer">
          <BsSearch className="w-3" />
        </label>
        <input id="search" className="flex-1 border-solid border-2 border-slate-300 outline-none py-1 pl-8 text-sm rounded-md" type="search" placeholder="Enter Keyword" />
        <button className="flex gap-1 items-center py-1 px-3 border-solid border-2 border-slate-300 bg-white rounded-md text-sm font-semibold">
          <RiFilter2Line />
          Filters
        </button>
      </div>

      <div className="border-b border-b-sky-700 pb-1 mb-5">
        <ul className="list-none flex flex-wrap gap-2 lg:gap-0 lg:justify-between text-sm text-sky-800 cursor-pointer">
          <li>Customer</li>
          <li>Author</li>
          <li>Super Admin</li>
          <li>BDE</li>
          <li className="font-extrabold">Advisor</li>
          <li>Admin Office</li>
          <li>Principal</li>
          <li>Principal LMI</li>
          <li>Bank Officer</li>
          <li>Bank Admin</li>
          <li>Bank Principal</li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
