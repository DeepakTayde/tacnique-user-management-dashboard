import React, { useState } from 'react'
import UserFormModal from './UserFormModal'
import { postUserData } from '../services/api'


// This HeaderComponent is used to display the header of the dashboard with a title and an "Add User" button.
const HeaderComponent = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  const handleAddUser = () => {
    setIsUserModalOpen(true);
  }
  const handleCloseModal = () => {
    setIsUserModalOpen(false);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    const data = {...userData, id: Date.now().toString()};

    // Posting user data to the API

      postUserData(data).then((response) => {
        console.log('User added successfully:', response.data);
      }).catch((error) => {
        console.error('Error adding user:', error);
      })

  

    setIsUserModalOpen(false);
  }
  return (
    <div className='flex justify-between items-center p-4 border-b border-primary w-full  '>
        <h1 className='text-primary font-bold text-lg '>Tecnique User Management Dashboard</h1>
        <button className='bg-primary text-white font-bold text-lg px-3 py-2 rounded-md ' onClick={handleAddUser}>Add User</button>
        <UserFormModal isOpen={isUserModalOpen} onClose={handleCloseModal} onSubmit={handleFormSubmit} />
        </div>
  )
}

export default HeaderComponent