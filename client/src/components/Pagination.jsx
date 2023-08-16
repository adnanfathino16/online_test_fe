import { GoChevronDown } from "react-icons/go";

const Pagination = () => {
  return (
    <div className="bg-slate-100 md:p-4">
      <div className="lg:w-[1050px] py-2 px-3 bg-white mx-auto">
        <div className="w-full flex justify-between">
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
    </div>
  );
};

export default Pagination;
