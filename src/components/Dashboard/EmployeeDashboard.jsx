import React from 'react'
import Header from '../other/Header'
import TaskListSec1 from '../other/TaskListSec1'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen w-full'>
        <Header />
        <TaskListSec1/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard