import React, { useState } from "react";

const SearchBar = ({ users, setFilteredUsers }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.company.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(searchedUsers);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full h-full flex items-center justify-center bg-white rounded-lg p-4 shadow gap-2"
    >
      <h2 className="font-bold text-primary">SearchBar</h2>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name, email or department"
        className="w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <button
        type="submit"
        className="font-bold text-white bg-secondary px-4 py-2 rounded "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
