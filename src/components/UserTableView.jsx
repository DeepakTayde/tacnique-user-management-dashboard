import React, { useState } from "react";
import UserFormModal from "./UserFormModal";
import { deleteUserData } from "../services/api";

const UserTableView = ({ users, setUsers }) => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // This is the Helper function that splits the full name into first name and last name
  const getFistAndLastName = (fullName) => {
    // Splits full name using rest operator
    const [firstName, ...rest] = fullName.split(" ");

    // Joins the last name or rest  array  into a string and returns an object with first name and last name
    return { firstName, lastName: rest.join(" ") };
  };

  // This function returns user object with required fields only
  const getUserValue = (user) => {
    const { firstName, lastName } = getFistAndLastName(user.name);
    return {
      id: user.id,
      firstName,
      lastName,
      email: user.email,
      department: user.company?.name || "",
    };
  };

  // When user clicks on edit button, this function sets the selected user and opens the modal
  const handleEditSelectedUser = (user) => {
    setSelectedUser(getUserValue(user));
    setIsUserModalOpen(true);
  };
  const handleDeleteSelectedUser = (userId) => {
    deleteUserData(userId)
      .then((response) => {
        console.log("User deleted successfully:", response);
        alert("User deleted successfully");
        
        // we cant re-render the component because every time api gives same date
        
        
        // if (response.status === 200) {
        //   // If deletion is successful, then updating the users state to remove the deleted user
        //   setUsers((prevUsers) =>
        //     prevUsers.filter((user) => user.id !== userId)
        //   );
        //   alert("User deleted successfully");
        // } else {
        //   alert("Failed to delete user");
        // }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  // If user clicks on cancel or outside the modal, this function closed the modal and reset the selected user
  const handleCloseUserFormModal = () => {
    setIsUserModalOpen(false);
    setSelectedUser(null);
  };

  console.log("users in table view:", users);

  return (
    <div className="w-full h-full flex items-center justify-center bg-white rounded-lg p-4 shadow-lg">
      <table className="min-w-full text-primary text-left">
        <thead>
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">First Name</th>
            <th className="py-2 px-4 border">Last Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Department</th>
            <th className="py-2 px-4 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            // Destructuring first name and last name using  the helper function, because we need separate first name and last name in the table
            const { firstName, lastName } = getFistAndLastName(user.name);

            return (
              <tr key={user.id}>
                <td className="py-2 px-4 border">{user.id}</td>
                <td className="py-2 px-4 border">{firstName}</td>
                <td className="py-2 px-4 border">{lastName}</td>
                <td className="py-2 px-4 border">{user.email}</td>
                <td className="py-2 px-4 border">{user.company.name}</td>
                <td className="py-2 px-4 border text-center">
                  <button
                    className="bg-secondary hover:bg-blue-500 text-white font-bold shadow-lg py-1 px-2 rounded mr-2"
                    onClick={() => handleEditSelectedUser(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-700 hover:bg-red-500 text-white font-bold py-1 px-2 shadow-lg rounded"
                    onClick={() => handleDeleteSelectedUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Modal for Adding/Editing User */}
      <UserFormModal
        isOpen={isUserModalOpen}
        onClose={handleCloseUserFormModal}
        userValue={selectedUser}
        setUsers={setUsers}
      />
    </div>
  );
};

export default UserTableView;
