import React from "react";
import FilterPopup from "../components/FilterPopup";
import SearchBar from "../components/SearchBar";
import UserTableView from "../components/UserTableView";

const UserPage = () => {
  return (
    <>
      <div className=" min-h-screen py-2 w-full px-5 gap-4 flex flex-col">
        <div className="w-full grid grid-cols-12 pt-4 gap-10">

          <div className="col-span-4">
            <FilterPopup />
          </div>
          <div className="col-span-8">
            <SearchBar />
          </div>
          
        </div>
        <div className="flex align-center w-full min-h-screen">
          <UserTableView/>
        </div>
      </div>
    </>
  );
};

export default UserPage;
