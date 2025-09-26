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
    console.log("Searched user selected:", filter);
    const filtered = users.filter((user) => {
      // In user object name is fullName , so we need to split it into firstName and lastName to match with filters
      const [firstName, ...lastNameParts] = user.name
        ? user.name.split(" ")
        : ["", ""];

      // now joining lastNameParts to form lastName
      const lastName = lastNameParts.join(" ");

      // also ignore empty filters while matching
      const matchesFirstName =
        !filter.firstName ||
        firstName.toLowerCase().includes(filter.firstName.toLowerCase());
      const matchesLastName =
        !filter.lastName ||
        lastName.toLowerCase().includes(filter.lastName.toLowerCase());
      const matchesEmail =
        !filter.email ||
        user.email.toLowerCase().includes(filter.email.toLowerCase());
      const matchesDepartment =
        filter.department === "All" ||
        (user.company?.name && user.company.name === filter.department);

      return (
        matchesFirstName && matchesLastName && matchesEmail && matchesDepartment
      );
    });

    setFilteredUsers(filtered);
  };

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleResetFilters = () => {
    setFilteredUsers(users);
  };

  return (
    <>
      <div className=" min-h-screen py-2 w-full px-5 gap-4 flex flex-col">
        <HeaderComponent />
        <SearchBar users={filteredUsers} setFilteredUsers={setFilteredUsers} />
        <div className="w-full grid grid-cols-12 pt- gap-2">
          <div className="col-span-2 ">
            <FilterPopup
              onApplyFilters={handleApplyFilters}
              onResetFilters={handleResetFilters}
            />
          </div>
          <div className="col-span-10">
            <div className="flex align-center w-full min-h-screen">
              <UserTableView
                users={filteredUsers}
                setUsers={setFilteredUsers}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
