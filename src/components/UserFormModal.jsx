import React from "react";
import {  postUserData } from "../services/api";

const UserFormModal = ({ isOpen, onClose, userValue = {} }) => {
  if (!isOpen) return null;
  
    const handleUserFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData.entries());
    
    const data = userValue ? { ...userData, id: userValue.id } : { ...userData, id: Date.now().toString() };

    postUserData(data)
      .then((response) => {
        console.log('User data submitted successfully:', response.data);
        alert('User data submitted successfully');
        // // after submitting data to api, fetching again for dynamic behaviour
        // fetchUsersData()
        //   .then((response) => setUsers(response.data))
        //   .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    onClose();
  }

  
  return (
    <div className="fixed inset-0 z-50 bg-primary bg-opacity-40">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-lg font-bold text-primary mb-4 text-center">
          {userValue.id ? "Edit User" : "Add User"}
        </h2>
        <form action="" onSubmit={handleUserFormSubmit} className="flex flex-col gap-2">
          <div className="flex flex-col ">
            <label htmlFor="firstName" className="text-primary">
              First Name
            </label>
            <input
              type="text"
              defaultValue={userValue.firstName || ""}
              name="firstName"
              placeholder="Enter First Name"
              className="w-full border border-primary-300 rounded-md p-2 mt-1 mb-3"
              required
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="lastName" className="text-primary">
              Last Name
            </label>
            <input
              type="text"
              defaultValue={userValue.lastName || ""}
              name="lastName"
              placeholder="Enter Last Name"
              className="w-full border border-gray-300 rounded-md p-2 mt-1 mb-3"
              required
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-primary">
              Email
            </label>
            <input
              type="email"
              defaultValue={userValue.email || ""}
              name="email"
              className="w-full border border-gray-300 rounded-md p-2 mt-1 mb-3"
              required
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="department" className="text-primary">
              Department
            </label>
            <input
              type="text"
                defaultValue={userValue.department || ""}
              name="department"
              className="w-full border border-gray-300 rounded-md p-2 mt-1 mb-3"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-200" >Cancel</button>
            <button type="submit"  className="px-4 py-2 rounded bg-primary text-white" >Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormModal;
