import React, { useEffect, useState } from "react";
import { fetchUsersData, postUserData } from "../services/api";
import UserFormModal from "./UserFormModal";

const UserTableView = () => {
  const [users, setUsers] = useState([]);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [editSelectedUser, setEditSelectedUser] = useState(null);


  // This is the Helper function that splits the full name into first name and last name
  const getFistAndLastName = (fullName) => {

    // Splits full name using rest operator
    const [firstName, ...rest] = fullName.split(" ");

    // Joins the last name or rest  array  into a string and returns an object with first name and last name
    return { firstName, lastName: rest.join(" ") };

  };

  // Fetching Users data using useEffect hook and setting it into local state users
  useEffect(() => {
    fetchUsersData()
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);


  const getUserValue = (user) => {
    const { firstName, lastName } = getFistAndLastName(user.name);
    return {
      id: user.id,
      firstName,
      lastName,
      email: user.email,
      department: user.company?.name  || "",
    };
  }

  const hadleEditSelectedUser =(user) =>{
    setEditSelectedUser(getUserValue(user));
    setIsUserModalOpen(true);
  }
  const handleCloseUserFormModal = () => {
    setIsUserModalOpen(false);
    setEditSelectedUser(null);
  }

  const handleUserFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData.entries());
    
    const data = editSelectedUser ? { ...userData, id: editSelectedUser.id } : { ...userData, id: Date.now().toString() };

    postUserData(data)
      .then((response) => {
        console.log('User data submitted successfully:', response.data);
        // after submitting data to api, fetching again for dynamic behaviour
        fetchUsersData()
          .then((response) => setUsers(response.data))
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    handleCloseUserFormModal();
  }


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
            // Destructuring first name and last name using  the helper function
            const { firstName, lastName } = getFistAndLastName(user.name);

            return (
              <tr key={user.id}>
                <td className="py-2 px-4 border">{user.id}</td>
                <td className="py-2 px-4 border">{firstName}</td>
                <td className="py-2 px-4 border">{lastName}</td>
                <td className="py-2 px-4 border">{user.email}</td>
                <td className="py-2 px-4 border">{user.company.name}</td>
                <td className="py-2 px-4 border text-center">
                  <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold shadow-lg py-1 px-2 rounded mr-2" onClick={() => hadleEditSelectedUser(user) }>
                    Edit
                  </button>
                  <button className="bg-red-700 hover:bg-red-500 text-white font-bold py-1 px-2 shadow-lg rounded">
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
        onSubmit={handleUserFormSubmit}
        userValue={editSelectedUser}
      /> 
    </div>
  );
};

export default UserTableView;
