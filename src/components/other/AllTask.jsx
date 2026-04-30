import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import AllTaskCard from './AllTaskCard'

const AllTask = () => {
    const data = useContext(AuthContext)
    const employeeData = data.employeeData
    console.log(data);
    
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-46 overflow-auto'>
        {employeeData.map((e,idx)=>{
            return <AllTaskCard key={idx} id={idx} firstName={e.firstName} taskCount={e.tasks} email={e.email} />
        })}
        
    </div>
  )
}

export default AllTask