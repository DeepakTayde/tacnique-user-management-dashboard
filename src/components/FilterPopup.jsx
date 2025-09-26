import React, { useState } from "react";

const departments = [
  "All",
  "Engineering",
  "Human Resources",
  "Sales",
  "Marketing",
  "Finance",
  "Legal",
  "Customer Support",
];

const FilterPopup = ({ onApplyFilters, onResetFilters }) => {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "All",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => {
      return { ...prevFilters, [name]: value };
    });
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();
    onApplyFilters(filters);
  };

  const handleResetFilters = () => {
    const resetFilters = {
      firstName: "",
      lastName: "",
      email: "",
      department: "All",
    };
    setFilters(resetFilters);
    onResetFilters(resetFilters);
  };

  return (
    <form
      className="w-full text-primary flex flex-col gap-1 bg-white rounded-lg p-4 shadow"
      onSubmit={handleApplyFilters}
    >
      <h2 className="text-lg  font-semibold mb-4">Filter Users</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            name="firstName"
            id=""
            value={filters.firstName}
            onChange={handleChange}
            className="w-full  p-1 rounded border"
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            name="lastName"
            id=""
            value={filters.lastName}
            onChange={handleChange}
            className="w-full  p-1 rounded border"
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id=""
            value={filters.email}
            onChange={handleChange}
            className="w-full  p-1 rounded border"
          />
        </label>

        <label htmlFor="department">
          Department
          <select name="department" value={filters.department} onChange={handleChange} className="w-full  p-1 rounded border" >
            {departments.map((department)=>(
              <option key = {department} value={department}>{department}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex justify-between mt-2">
        <button
          type="submit"
          className="bg-secondary text-white rounded px-2 py-2 shadow"
        >
          Apply Filters
        </button>
        <button
          type="button"
          className="bg-gray-500 text-white px-2 py-2 shadow rounded"
          onClick={handleResetFilters}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default FilterPopup;
