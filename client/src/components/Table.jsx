import React from "react";
import { dataUser } from "../data";
import EditUser from "./EditUser";

const Table = () => {
  const [dataUsers, setDataUser] = [dataUser];
  return (
    <div className="bg-violet-200 lg:h-[370px] overflow-y-auto">
      <table className="w-full">
        <thead className="bg-sky-950">
          <tr className="text-left text-white text-sm">
            <td className="py-2 px-3 rounded-tl-md">No.</td>
            <td className="py-2 px-3">Name</td>
            <td className="py-2 px-3">Office</td>
            <td className="py-2 px-3">Phone</td>
            <td className="py-2 px-3">Email</td>
            <td className="py-2 px-3 rounded-tr-md">Action</td>
          </tr>
        </thead>
        <tbody className="text-left text-xs">
          {dataUsers.map((user, index) => (
            <tr className={`${index % 2 === 0 ? "bg-slate-200" : "bg-white"}`} key={index}>
              <td className="py-2 px-3">{index + 1}</td>
              <td className="py-2 px-3">{user.name}</td>
              <td className="py-2 px-3">{user.office}</td>
              <td className="py-2 px-3">{user.phone}</td>
              <td className="py-2 px-3">{user.email}</td>
              <td className="py-2 px-3">
                <div className="flex gap-2">
                  <EditUser name={user.name} />
                  <button className="border border-red-500 py-1 px-3 bg-red-600 rounded-[4px] text-white">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
