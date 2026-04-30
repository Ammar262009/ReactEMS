import React, { useContext, useState } from 'react'

const TaskListCard = (props) => {

    return (
        <div className='rounded-xl flex justify-between flex-col shrink-0 p-4 bg-red-300 h-full w-75'>
            <div>
                <div className='flex justify-between items-center'>
                    <h2 className='bg-red-600 py-1 rounded-xl text-sm px-3'>{props.category}</h2>
                    <h3 className='text-sm'>{props.date}</h3>
                </div>
                <h2 className='mt-3 text-xl font-semibold'>{props.title}</h2>
                <p className='text-sm mt-2'>
                    {props.description}
                </p>
            </div>
            <div className='mb-0 flex gap-3 flex-col'>
                <button className='bg-green-600 w-full cursor-pointer active:scale-95 py-2 px-5 rounded-xl'>Mark as Completed</button>
                <button className='bg-red-600 w-full cursor-pointer active:scale-95 py-2 px-5 rounded-xl'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default TaskListCard