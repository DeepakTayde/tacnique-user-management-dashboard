import React, { useState } from 'react'
import UserFormModal from './UserFormModal'

// This HeaderComponent is used to display the header of the dashboard with a title and an "Add User" button.
const HeaderComponent = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  const handleAddUser = () => {
    setIsUserModalOpen(true);
  }
  const handleCloseModal = () => {
    setIsUserModalOpen(false);
  }


  return (
    <div className='flex justify-between items-center p-4 border-b border-primary w-full  '>
        <h1 className='text-primary font-bold text-lg '>Tecnique User Management Dashboard</h1>
        <button className='bg-primary text-white font-bold text-lg px-3 py-2 rounded-md ' onClick={handleAddUser}>Add User</button>
        <UserFormModal isOpen={isUserModalOpen} onClose={handleCloseModal} />
        </div>
  )
}

export default HeaderComponent