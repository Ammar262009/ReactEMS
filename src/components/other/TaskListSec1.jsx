import React from 'react'

const TaskListSec1 = () => {
  return (
    <div className='flex mt-10 justify-between gap-5'>
        <div className='w-[45%] px-10 py-6 rounded-xl bg-red-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='font-medium text-xl'>New Task</h3>
        </div>
        <div className='w-[45%] px-10 py-6 rounded-xl bg-green-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='font-medium text-xl'>New Task</h3>
        </div>
        <div className='w-[45%] px-10 py-6 rounded-xl bg-blue-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='font-medium text-xl'>New Task</h3>
        </div>
        <div className='w-[45%] px-10 py-6 rounded-xl bg-amber-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='font-medium text-xl'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListSec1