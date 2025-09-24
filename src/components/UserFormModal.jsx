import React from "react";

const UserFormModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-primary bg-opacity-40">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-lg font-bold text-primary mb-4 text-center">
          Add User
        </h2>
        <form action="" onSubmit={onSubmit} className="flex flex-col gap-2">
          <div className="flex flex-col ">
            <label htmlFor="firstName" className="text-primary">
              First Name
            </label>
            <input
              type="text"
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
