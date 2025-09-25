import React, { useEffect, useState } from "react";
import FilterPopup from "../components/FilterPopup";
import SearchBar from "../components/SearchBar";
import UserTableView from "../components/UserTableView";
import HeaderComponent from "../components/HeaderComponent";
import { fetchUsersData } from "../services/api";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  // Fetching Users data using useEffect hook and setting it into local state users
  useEffect(() => {
    fetchUsersData()
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

const handleApplyFilters = (filter) => {
  console.log('Filter selected:', filter);
  const filtered = users.filter((user) => user.department === filter);
  setFilteredUsers(filtered);
}

const handleResetFilters = () => {
  setFilteredUsers(users);
}

  return (
    <>
      <div className=" min-h-screen py-2 w-full px-5 gap-4 flex flex-col">
          <HeaderComponent/>  
        <div className="w-full grid grid-cols-12 pt-4 gap-10">

          <div className="col-span-7">
            <FilterPopup onApplyFilters={handleApplyFilters} onResetFilters={handleResetFilters}/>
          </div>
          <div className="col-span-5">
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
