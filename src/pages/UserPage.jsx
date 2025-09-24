import React from "react";
import FilterPopup from "../components/FilterPopup";
import SearchBar from "../components/SearchBar";
import UserTableView from "../components/UserTableView";

const UserPage = () => {
  return (
    <>
      <div className=" min-h-screen py-2 w-full px-5">
        <div className="flex align-center gap-10 w-full">
          <FilterPopup />
          <SearchBar />
        </div>
        <div className="flex align-center w-full min-h-screen">
          <UserTableView/>
        </div>
      </div>
    </>
  );
};

export default UserPage;
