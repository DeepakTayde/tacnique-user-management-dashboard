import React, { useEffect, useState } from "react";
import FilterPopup from "../components/FilterPopup";
import SearchBar from "../components/SearchBar";
import UserTableView from "../components/UserTableView";
import { fetchUsersData } from "../services/api";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  // Fetching Users data using useEffect hook and setting it into local state users
  useEffect(() => {
    fetchUsersData()
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);


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
          <UserTableView users = {users} setUsers={setUsers}/>
        </div>
      </div>
    </>
  );
};

export default UserPage;
