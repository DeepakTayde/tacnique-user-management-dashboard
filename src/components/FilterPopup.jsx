import React, { useState } from 'react'

const FilterPopup = () => {
  const [filters, setFilters] = useState({
    firstName: '',
    lastName:'',
    email: '',
    department: 'All'
  });

  return (
    <div className='w-full h-full flex items-center justify-center bg-white rounded-lg p-4 shadow'>
      
    </div>
  )
}

export default FilterPopup