import { GoChevronDown } from "react-icons/go";

const Pagination = () => {
  return (
    <div className="bg-slate-100 py-2 flex justify-center">
      <div className="w-[90%] h-[40px] py-2 px-3 bg-white rounded-sm flex justify-between items-center">
        <div>
          <p className="text-xs text-slate-300">1 - 15 of 30</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs text-slate-300">The page you're on</p>
          <button className="flex gap-1 items-center border border-slate-500 py-1 px-3 rounded-md text-xs">
            1<GoChevronDown />
          </button>
          <div className="flex gap-1">
            <span className="text-slate-400">| </span>
            <button className="text-xs text-slate-300">prev</button>
            <button className="text-xs text-slate-300">next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
